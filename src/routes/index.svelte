<script lang="ts" context="module">
    import { defaultLocale } from "$lib/locales"

    import type { Load } from "@sveltejs/kit"

    export const load: Load = () => ({ status: 301, redirect: `/${defaultLocale}` })
</script>
