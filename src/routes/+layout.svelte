<script lang="ts">
    import type { Snippet } from "svelte"

    import { PageProgressBar, ToastContainer } from "./_components"

    import { browser } from "$app/environment"
    import { darkTheme } from "$lib/stores"

    // eslint-disable-next-line import-x/no-unassigned-import
    import "uno.css"
    // eslint-disable-next-line import-x/no-unassigned-import
    import "@unocss/reset/tailwind.css"
    // eslint-disable-next-line import-x/no-unassigned-import
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
