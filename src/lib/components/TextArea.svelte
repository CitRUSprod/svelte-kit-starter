<script lang="ts">
    import type { ClassValue } from "svelte/elements"

    import { Textarea } from "./internal"

    import type { ElementType } from "$lib/types"
    import { getElementTypeObject } from "$lib/utils"

    interface Props {
        type?: ElementType
        placeholder?: string
        label?: string
        resizable?: boolean
        disabled?: boolean
        readonly?: boolean
        autofocus?: boolean
        value?: string | number | null | undefined
        class?: ClassValue
        [key: string]: unknown
    }

    let {
        type = "default",
        placeholder = undefined,
        label = undefined,
        resizable = false,
        disabled = false,
        readonly = false,
        autofocus = false,
        value = $bindable(),
        class: klass = undefined,
        ...restProps
    }: Props = $props()

    const types = $derived(getElementTypeObject(type))
</script>

<div
    class={[
        "u:relative u:flex u:items-center",
        {
            "u:opacity-50": disabled,
            "u:text-default": types.default,
            "u:text-primary": types.primary,
            "u:text-success": types.success,
            "u:text-error": types.error,
            "u:text-warning": types.warning,
            "u:text-info": types.info
        },
        klass
    ]}
>
    {#if label}
        <div
            class="u:absolute u:left-3 u:top--1.8 u:px-0.5 u:bg-content u:text-xs u:select-none u:pointer-events-none u:z-1"
        >
            {label}
        </div>
    {/if}
    <Textarea
        class={[
            "u:w-full u:h-40 u:px-3 u:py-2 u:bg-content u:text-content-inverse u:border u:rounded u:placeholder-opacity-80 u:outline-none",
            "u:dark:placeholder-opacity-80",
            "u:disabled:cursor-not-allowed",
            {
                "u:border-default u:placeholder-text-default-lighter": types.default,
                "u:border-primary u:placeholder-text-primary-lighter": types.primary,
                "u:border-success u:placeholder-text-success-lighter": types.success,
                "u:border-error u:placeholder-text-error-lighter": types.error,
                "u:border-warning u:placeholder-text-warning-lighter": types.warning,
                "u:border-info u:placeholder-text-info-lighter": types.info,
                "u:resize-none": !resizable
            }
        ]}
        {autofocus}
        {disabled}
        {placeholder}
        {readonly}
        bind:value
        {...restProps}
    />
</div>
