<script lang="ts">
    import type { Snippet } from "svelte"
    import type { ClassValue } from "svelte/elements"

    interface Props {
        title: string
        class?: ClassValue
        children?: Snippet
    }

    const { title, class: klass = undefined, children }: Props = $props()
</script>

<div class="u:container u:mx-auto u:p-4">
    <div>
        <h1>{title}</h1>
    </div>
    <div class={["u:grid u:gap-4 u:my-4", klass]}>
        {@render children?.()}
    </div>
</div>
