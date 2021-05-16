<script lang="ts">
    import { Button, Card, CardHeader, CardBody, CardTitle } from "sveltestrap/src"

    let count = 0
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<div class="center">
    <Card>
        <CardHeader>
            <CardTitle>SvelteKit Template</CardTitle>
        </CardHeader>
        <CardBody class="text-center">
            <Button color="success" on:click="{() => count++}">
                Clicked: {count}
            </Button>
        </CardBody>
    </Card>
</div>

<style lang="scss">
    .center {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
</style>
