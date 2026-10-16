<script lang="ts">
    import type { Snippet } from "svelte"

    import { PageProgressBar, ToastContainer } from "./_components"

    import { browser } from "$app/environment"
    import { darkTheme } from "$lib/stores"

    import "uno.css"
    import "@unocss/reset/tailwind.css"
    import "$styles/global.css"

    interface Props {
        children?: Snippet
    }

    const { children }: Props = $props()

    if (browser) {
        darkTheme.sync()
    }
</script>

<PageProgressBar />
{@render children?.()}
<ToastContainer />
