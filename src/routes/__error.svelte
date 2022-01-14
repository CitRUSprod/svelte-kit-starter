<script lang="ts" context="module">
    import type { ErrorLoad } from "@sveltejs/kit"

    export const load: ErrorLoad = ({ error, status }) => ({
        props: { error, status }
    })
</script>

<script lang="ts">
    import { Content, Button } from "$lib/components"

    export let error: Error
    export let status: number
</script>

<svelte:head>
    <title>Error {status}</title>
</svelte:head>

<Content.Center>
    <div class="border-error rounded-lg border text-center p-8">
        <h1>Error {status}</h1>
        <h2>{error.message}</h2>
        <div class="flex justify-center mt-5">
            <Button type="error" href="/">Go Home</Button>
        </div>
    </div>
</Content.Center>
