<script lang="ts">
    import { DefaultLayout, SimpleLayout } from "./_layouts"
    import { PageProgressBar, ToastContainer } from "./_components"

    import { browser } from "$app/env"
    import { afterNavigate } from "$app/navigation"
    import { layout, darkTheme } from "$lib/stores"
    import { title } from "$lib/env"

    if (browser) {
        darkTheme.sync()
    }

    if (!title) {
        console.error("Create .env file with VITE_TITLE variable.")
    }

    afterNavigate(() => {
        layout.apply()
    })
</script>

<PageProgressBar />
{#if $layout === "default"}
    <DefaultLayout>
        <slot />
    </DefaultLayout>
{:else}
    <SimpleLayout>
        <slot />
    </SimpleLayout>
{/if}
<ToastContainer />

<!-- eslint-disable @ota-meshi/svelte/valid-compile -->
<style lang="postcss" global>
    @windicss;

    html {
        @apply overflow-x-hidden;
    }

    body {
        @apply flex flex-col min-h-screen bg-content text-content-inverse transition duration-200 overflow-x-hidden;
    }

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
