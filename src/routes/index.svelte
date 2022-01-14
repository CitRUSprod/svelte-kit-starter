<script lang="ts">
    import { Content, Button } from "$lib/components"

    import { title } from "$lib/env"
    import { toasts } from "$lib/stores"

    let count = 0

    function addOne() {
        count++
        toasts.add("success", `Count: ${count}`)
    }
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<Content.Center>
    <div class="border-primary rounded-lg border text-center p-8">
        <h1>{title}</h1>
        <div class="flex justify-center mt-5">
            <Button type="primary" on:click={addOne}>
                Clicked: {count}
            </Button>
        </div>
    </div>
</Content.Center>
