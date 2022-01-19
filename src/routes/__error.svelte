<script lang="ts" context="module">
    import { t, localePath, loadTranslations } from "$lib/locales"

    import type { ErrorLoad } from "@sveltejs/kit"

    export const load: ErrorLoad = async ({ error, status, url }) => {
        const locale = /(?<=^\/)\w{2}(?=\/|$)/.exec(url.pathname)!.toString()
        const route = url.pathname.replace(new RegExp(`^/${locale}`), "")
        await loadTranslations(locale, "error")
        return { stuff: { route }, props: { error, status } }
    }
</script>

<script lang="ts">
    import { Content, Button } from "$lib/components"

    export let status: number
</script>

<svelte:head>
    <title>{$t("error.error")} {status}</title>
</svelte:head>

<Content.Center>
    <div class="border-error rounded-lg border text-center p-8">
        <h1>{$t("error.error")} {status}</h1>
        <div class="flex justify-center mt-5">
            <Button type="error" href={$localePath("/")}>{$t("error.goHome")}</Button>
        </div>
    </div>
</Content.Center>
