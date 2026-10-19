<script lang="ts">
    import type { HTMLInputAttributes } from "svelte/elements"

    import { Input } from "./_components"

    import type { ComponentBasicProps, ComponentVariant } from "$lib/types"
    import { getComponentVariantMap } from "$lib/utils"

    type Props = ComponentBasicProps & {
        variant?: ComponentVariant
        placeholder?: string
        label?: string
        valueType?: string
        disabled?: boolean
        readonly?: boolean
        autofocus?: boolean
        value?: string | number | null | undefined
        leftIconClass?: string
        rightIconClass?: string
        onKeyPress?: HTMLInputAttributes["onkeypress"]
    }

    let {
        variant = "default",
        placeholder = undefined,
        label = undefined,
        valueType = "text",
        disabled = false,
        readonly = false,
        autofocus = false,
        value = $bindable(),
        leftIconClass = undefined,
        rightIconClass = undefined,
        onKeyPress = undefined,
        class: klass = undefined,
        ...restProps
    }: Props = $props()

    const variants = $derived(getComponentVariantMap(variant))
</script>

<div
    class={[
        "u:relative u:flex u:items-center",
        {
            "u:opacity-50": disabled,
            "u:text-default": variants.default,
            "u:text-primary": variants.primary,
            "u:text-success": variants.success,
            "u:text-error": variants.error,
            "u:text-warning": variants.warning,
            "u:text-info": variants.info
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
    {#if leftIconClass}
        <i class={["u:absolute u:left-3 u:pointer-events-none u:text-xl", leftIconClass]}></i>
    {/if}
    <Input
        class={[
            "u:w-full u:h-10 u:px-3 u:bg-content u:text-content-inverse u:border u:rounded u:placeholder-opacity-80 u:outline-none",
            "u:dark:placeholder-opacity-80",
            "u:disabled:cursor-not-allowed",
            {
                "u:pl-10": leftIconClass,
                "u:pr-10": rightIconClass,
                "u:border-default u:placeholder-text-default-lighter": variants.default,
                "u:border-primary u:placeholder-text-primary-lighter": variants.primary,
                "u:border-success u:placeholder-text-success-lighter": variants.success,
                "u:border-error u:placeholder-text-error-lighter": variants.error,
                "u:border-warning u:placeholder-text-warning-lighter": variants.warning,
                "u:border-info u:placeholder-text-info-lighter": variants.info
            }
        ]}
        {autofocus}
        {disabled}
        {placeholder}
        {readonly}
        type={valueType}
        bind:value
        onkeypress={onKeyPress}
        {...restProps}
    />
    {#if rightIconClass}
        <i class={["u:absolute u:right-3 u:pointer-events-none u:text-xl", rightIconClass]}></i>
    {/if}
</div>
