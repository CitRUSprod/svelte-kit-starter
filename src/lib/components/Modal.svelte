<script lang="ts">
    import { Dialog } from "bits-ui"
    import type { Snippet } from "svelte"
    import type { ClassValue } from "svelte/elements"
    import { fade } from "svelte/transition"

    interface Props {
        visible?: boolean
        persistent?: boolean
        class?: ClassValue
        children?: Snippet
    }

    let {
        visible = $bindable(false),
        persistent = false,
        class: klass = undefined,
        children
    }: Props = $props()

    function handleBackdrop(e: MouseEvent) {
        if (!persistent && e.target === e.currentTarget) {
            visible = false
        }
    }
</script>

<Dialog.Root bind:open={visible}>
    <Dialog.Portal>
        <Dialog.Overlay forceMount>
            {#snippet child({ props, open })}
                {#if open}
                    <div
                        {...props}
                        in:fade={{ duration: 300 }}
                        out:fade={{ duration: 200 }}
                        class="u:fixed u:inset-0 u:bg-black u:bg-opacity-30"
                    ></div>
                {/if}
            {/snippet}
        </Dialog.Overlay>
        <Dialog.Content
            forceMount
            interactOutsideBehavior={persistent ? "ignore" : "close"}
            escapeKeydownBehavior={persistent ? "ignore" : "close"}
        >
            {#snippet child({ props, open })}
                {#if open}
                    <div
                        {...props}
                        in:fade={{ duration: 300 }}
                        out:fade={{ duration: 200 }}
                        class="u:fixed u:inset-0 u:flex u:justify-center u:items-center u:p-4"
                        onclick={handleBackdrop}
                    >
                        <div class={["u:p-8 u:bg-content u:shadow-md u:rounded-md", klass]}>
                            {@render children?.()}
                        </div>
                    </div>
                {/if}
            {/snippet}
        </Dialog.Content>
    </Dialog.Portal>
</Dialog.Root>
