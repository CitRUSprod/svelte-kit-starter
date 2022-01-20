<script lang="ts" context="module">
    import { t, localePath, loadTranslations } from "$lib/locales"
    import { getLocaleAndRoute } from "$lib/utils"

    import type { ErrorLoad } from "@sveltejs/kit"

    export const load: ErrorLoad = async ({ status, error, url }) => {
        const { locale, route } = getLocaleAndRoute(url.pathname)
        await loadTranslations(locale!, "error")

        return {
            stuff: { route },
            props: { status, error }
        }
    }
</script>

<script lang="ts">
    import { Content, Button } from "$lib/components"

    export let status: number
    export let error: Error
</script>

<svelte:head>
    <title>{$t("error.error")} {status}</title>
</svelte:head>

<Content.Center>
    <div class="border-error rounded-lg border text-center p-8">
        <h1>{$t("error.error")} {status}</h1>
        <h2>{error.message}</h2>
        <div class="flex justify-center mt-5">
            <Button type="error" href={$localePath("/")}>
                {$t("error.goHome")}
            </Button>
        </div>
    </div>
</Content.Center>
