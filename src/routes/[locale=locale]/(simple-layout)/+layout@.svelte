<script lang="ts">
    import type { Snippet } from "svelte"
    import SvelteSeo from "svelte-seo"

    interface Props {
        children?: Snippet
    }

    const { children }: Props = $props()
</script>

<SvelteSeo noindex />

<main class="u:relative u:flex-1">
    {@render children?.()}
</main>
