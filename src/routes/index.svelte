<script lang="ts">
    import { Button } from "$lib/components"

    let count = 0
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<div class="flex justify-center items-center h-full">
    <div class="border-primary rounded-lg border text-center p-8">
        <h1 class="text-4xl">SvelteKit Template</h1>
        <div class="flex justify-center mt-5">
            <Button color="primary" outlined on:click="{() => count++}">
                Clicked: {count}
            </Button>
        </div>
    </div>
</div>
