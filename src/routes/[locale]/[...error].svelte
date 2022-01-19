<script lang="ts" context="module">
    import ErrorPage from "../__error.svelte"

    import { dev } from "$app/env"
    import { loadTranslations } from "$lib/locales"

    import type { Load } from "@sveltejs/kit"

    export const load: Load = async ({ params }) => {
        const { locale, error } = params

        let status = parseInt(error)

        if (Number.isNaN(status)) status = 404

        await loadTranslations(locale, "error")

        return {
            props: { status },
            status: dev ? status : 200,
            stuff: { status }
        }
    }
</script>

<script lang="ts">
    export let status: number
</script>

<ErrorPage {status} />
