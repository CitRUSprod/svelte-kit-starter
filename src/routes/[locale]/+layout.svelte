<script lang="ts">
    import type { Snippet } from "svelte"

    import { Header, Footer } from "./_components"

    interface Props {
        data: { route: string }
        children?: Snippet
    }

    const { data, children }: Props = $props()
</script>

<Header route={data.route} />
<main class="u:relative u:flex-1">
    {@render children?.()}
</main>
<Footer />
