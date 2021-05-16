<script lang="ts" context="module">
    import type { ErrorLoad } from "@sveltejs/kit"

    export const load: ErrorLoad = ({ error, status }) => ({
        props: { error, status }
    })
</script>

<script lang="ts">
    import { Button } from "sveltestrap/src"

    export let error: Error
    export let status: number
</script>

<svelte:head>
    <title>Error {status}</title>
</svelte:head>

<h1>Error {status}</h1>
<h2>{error.message}</h2>
<div>
    <Button color="primary" href="/">Go Home</Button>
</div>
