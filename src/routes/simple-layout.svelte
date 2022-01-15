<script lang="ts" context="module">
    import { layout } from "$lib/stores"

    import type { Load } from "@sveltejs/kit"

    export const load: Load = () => {
        layout.select("simple")
        return {}
    }
</script>

<script lang="ts">
    import { Content, Button } from "$lib/components"
</script>

<svelte:head>
    <title>Simple layout</title>
</svelte:head>

<Content.Center>
    <div class="border-primary rounded-lg border text-center p-8">
        <h1>Simple layout</h1>
        <div class="flex justify-center mt-5">
            <Button type="primary" href="/">Go home</Button>
        </div>
    </div>
</Content.Center>
