<script lang="ts">
    import classNames from "classnames"

    import { Input } from "./internal"

    import type { ElementType } from "$lib/types"
    import { getElementTypeObject } from "$lib/utils"

    interface Props {
        type?: ElementType
        placeholder?: string
        label?: string
        valueType?: string
        disabled?: boolean
        readonly?: boolean
        autofocus?: boolean
        value?: string | number | null | undefined
        leftIconClass?: string
        rightIconClass?: string
        class?: string
        [key: string]: unknown
    }

    let {
        type = "default",
        placeholder = undefined,
        label = undefined,
        valueType = "text",
        disabled = false,
        readonly = false,
        autofocus = false,
        value = $bindable(),
        leftIconClass = undefined,
        rightIconClass = undefined,
        class: klass = undefined,
        ...restProps
    }: Props = $props()

    const types = $derived(getElementTypeObject(type))
</script>

<div
    class={classNames(
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
    )}
>
    {#if label}
        <div
            class="u:absolute u:left-3 u:top--1.8 u:px-0.5 u:bg-content u:text-xs u:select-none u:pointer-events-none u:z-1"
        >
            {label}
        </div>
    {/if}
    {#if leftIconClass}
        <i class={`u:absolute u:left-3 u:pointer-events-none u:text-xl ${leftIconClass}`}></i>
    {/if}
    <Input
        class={classNames(
            "u:w-full u:h-10 u:px-3 u:bg-content u:text-content-inverse u:border u:rounded u:placeholder-opacity-80 u:outline-none",
            "u:dark:placeholder-opacity-80",
            "u:disabled:cursor-not-allowed",
            {
                "u:pl-10": leftIconClass,
                "u:pr-10": rightIconClass,
                "u:border-default u:placeholder-text-default-lighter": types.default,
                "u:border-primary u:placeholder-text-primary-lighter": types.primary,
                "u:border-success u:placeholder-text-success-lighter": types.success,
                "u:border-error u:placeholder-text-error-lighter": types.error,
                "u:border-warning u:placeholder-text-warning-lighter": types.warning,
                "u:border-info u:placeholder-text-info-lighter": types.info
            }
        )}
        {autofocus}
        {disabled}
        {placeholder}
        {readonly}
        type={valueType}
        bind:value
        {...restProps}
    />
    {#if rightIconClass}
        <i class={`u:absolute u:right-3 u:pointer-events-none u:text-xl ${rightIconClass}`}></i>
    {/if}
</div>
