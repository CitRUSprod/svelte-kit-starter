<script lang="ts">
    import * as Icon from "./Icon"

    import classNames from "classnames"
    import { getElementTypeObject } from "$lib/utils"

    import type { ElementType } from "$lib/types"

    export let type: ElementType = "default"
    export let label: string | undefined = undefined
    export let disabled = false
    export let checked = false as boolean

    let klass: string | undefined = undefined
    export { klass as class }

    $: types = getElementTypeObject(type)

    function click() {
        if (!disabled) {
            checked = !checked
        }
    }
</script>

<div
    class={classNames(
        "u-inline-flex u-items-center u-w-auto u-gap-1 u-align-top u-cursor-pointer",
        {
            "u-opacity-50": disabled
        },
        klass
    )}
    on:click={click}
>
    <span
        class={classNames(
            "u-flex u-justify-center u-items-center u-w-6 u-h-6 u-text-content-lighter u-border u-rounded u-select-none",
            {
                "u-bg-content": !checked,
                "u-border-default": types.default,
                "u-border-primary": types.primary,
                "u-border-success": types.success,
                "u-border-error": types.error,
                "u-border-warning": types.warning,
                "u-border-info": types.info,
                "u-bg-default": checked && types.default,
                "u-bg-primary": checked && types.primary,
                "u-bg-success": checked && types.success,
                "u-bg-error": checked && types.error,
                "u-bg-warning": checked && types.warning,
                "u-bg-info": checked && types.info
            }
        )}
    >
        {#if checked}
            <Icon.Success class="u-text-sm" />
        {/if}
    </span>
    {#if label}
        <span>{label}</span>
    {/if}
</div>
