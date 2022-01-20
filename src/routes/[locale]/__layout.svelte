<script lang="ts" context="module">
    import { loadTranslations } from "$lib/locales"
    import { getLocaleAndRoute } from "$lib/utils"

    import type { Load } from "@sveltejs/kit"

    export const load: Load = async ({ url }) => {
        const { locale, route } = getLocaleAndRoute(url.pathname)
        await loadTranslations(locale!, route)

        return {
            stuff: { route }
        }
    }
</script>

<slot />
