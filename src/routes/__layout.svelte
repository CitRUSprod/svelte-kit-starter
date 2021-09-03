<script lang="ts">
    import { ThePageProgressBar, TheHeader, TheContent } from "./_components"

    import { browser } from "$app/env"
    import { theme } from "$lib/stores"
    import { title } from "$lib/env"

    if (browser) {
        theme.sync()
    }

    if (!title) {
        console.error("Create .env file with VITE_TITLE variable.")
    }
</script>

<ThePageProgressBar />
<TheHeader />
<TheContent>
    <slot />
</TheContent>

<style lang="postcss" global>
    @import "tailwindcss/tailwind";
</style>
