<script lang="ts">
    import { PageProgressBar, ToastContainer } from "./_components"

    import { browser } from "$app/environment"
    import { darkTheme } from "$lib/stores"

    import "uno.css"
    import "@unocss/reset/tailwind.css"
    import "$styles/global.css"

    if (browser) {
        darkTheme.sync()
    }
</script>

<PageProgressBar />
<slot />
<ToastContainer />
