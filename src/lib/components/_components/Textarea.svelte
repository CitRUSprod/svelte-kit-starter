<script lang="ts">
    import { onMount } from "svelte"

    interface Props {
        readonly: boolean
        autofocus: boolean
        value: string | number | null | undefined
        [key: string]: unknown
    }

    let { readonly, autofocus, value = $bindable(), ...restProps }: Props = $props()

    let textarea: HTMLTextAreaElement

    onMount(() => {
        if (autofocus) {
            textarea.focus()
        }
    })
</script>

<textarea bind:this={textarea} {readonly} bind:value {...restProps}></textarea>
