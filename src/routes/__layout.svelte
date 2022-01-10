<script lang="ts">
    import { PageProgressBar, Header, Content, ToastContainer } from "./_components"

    import { browser } from "$app/env"
    import { darkTheme } from "$lib/stores"
    import { title } from "$lib/env"

    if (browser) {
        darkTheme.sync()
    }

    if (!title) {
        console.error("Create .env file with VITE_TITLE variable.")
    }
</script>

<PageProgressBar />
<Header />
<Content>
    <slot />
</Content>
<ToastContainer />

<style lang="postcss" global>
    @import "tailwindcss/tailwind";

    .break-text {
        word-break: break-word;
    }
</style>
