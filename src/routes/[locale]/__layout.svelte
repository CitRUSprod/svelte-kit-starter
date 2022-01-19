<script lang="ts" context="module">
    import { loadTranslations } from "$lib/locales"

    import type { Load } from "@sveltejs/kit"

    export const load: Load = async ({ url, params }) => {
        const { locale } = params
        const route = url.pathname.replace(new RegExp(`^/${locale}`), "")
        await loadTranslations(locale, route)
        return { stuff: { route } }
    }
</script>

<slot />
