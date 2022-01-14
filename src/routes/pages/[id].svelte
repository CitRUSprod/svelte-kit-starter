<script lang="ts" context="module">
    import type { Load } from "@sveltejs/kit"

    export const load: Load = ({ params }) => {
        const { id } = params
        return { props: { id } }
    }
</script>

<script lang="ts">
    import { Content } from "$lib/components"

    export let id: string
</script>

<svelte:head>
    <title>Page {id}</title>
</svelte:head>

<Content.Default title="Page {id}" />
