<script lang="ts">
    import { onMount } from "svelte"

    interface Props {
        type: string
        readonly: boolean
        autofocus: boolean
        value: string | number | null | undefined
        [key: string]: unknown
    }

    let { type, readonly, autofocus, value = $bindable(), ...restProps }: Props = $props()

    let input = $state<HTMLInputElement>()

    onMount(() => {
        if (autofocus) {
            setTimeout(() => {
                input?.focus()
            })
        }
    })
</script>

{#if type === "number"}
    <input bind:this={input} {readonly} type="number" bind:value {...restProps} />
{:else}
    <input {...{ type }} bind:this={input} {readonly} bind:value {...restProps} />
{/if}
