<script lang="ts">
    import type { ClassValue } from "svelte/elements"

    import type { ElementType } from "$lib/types"
    import { getElementTypeObject } from "$lib/utils"

    interface Props {
        type?: ElementType
        label?: string
        disabled?: boolean
        readonly?: boolean
        checked?: boolean
        class?: ClassValue
        [key: string]: unknown
    }

    let {
        type = "default",
        label = undefined,
        disabled = false,
        readonly = false,
        checked = $bindable(false),
        class: klass = undefined,
        ...restProps
    }: Props = $props()

    const types = $derived(getElementTypeObject(type))

    function click() {
        if (!readonly && !disabled) {
            checked = !checked
        }
    }
</script>

<button
    class={[
        "u:inline-flex u:items-center u:w-auto u:gap-1 u:align-top",
        {
            "u:cursor-pointer": !disabled && !readonly,
            "u:opacity-50 u:cursor-not-allowed": disabled,
            "u:cursor-[default]": readonly
        },
        klass
    ]}
    onclick={click}
    {...restProps}
>
    <span
        class={[
            "u:flex u:justify-center u:items-center u:w-6 u:h-6 u:text-content-lighter u:border u:rounded u:select-none",
            {
                "u:bg-content": !checked,
                "u:border-default": types.default,
                "u:border-primary": types.primary,
                "u:border-success": types.success,
                "u:border-error": types.error,
                "u:border-warning": types.warning,
                "u:border-info": types.info,
                "u:bg-default": checked && types.default,
                "u:bg-primary": checked && types.primary,
                "u:bg-success": checked && types.success,
                "u:bg-error": checked && types.error,
                "u:bg-warning": checked && types.warning,
                "u:bg-info": checked && types.info
            }
        ]}
    >
        {#if checked}
            <i class="u:i-fa-solid-check u:text-sm"></i>
        {/if}
    </span>
    {#if label}
        <span class="u:ml-1">{label}</span>
    {/if}
</button>
