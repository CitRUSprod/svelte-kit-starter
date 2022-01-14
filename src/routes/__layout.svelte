<script lang="ts">
    import { PageProgressBar, Header, Footer, ToastContainer } from "./_components"

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
<main class="relative flex-1">
    <slot />
</main>
<Footer />
<ToastContainer />

<style lang="postcss" global>
    @windicss;

    h1,
    h2,
    h3 {
        @apply font-bold;
    }

    h1 {
        @apply text-4xl;
    }

    h2 {
        @apply text-2xl;
    }

    h3 {
        @apply text-lg;
    }
</style>
