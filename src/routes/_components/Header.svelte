<script lang="ts">
    import { Icon, Button } from "$lib/components"

    import { darkTheme } from "$lib/stores"
    import { title } from "$lib/env"
</script>

<header class="flex items-center gap-2 px-6 py-2 bg-primary text-content-light shadow-lg">
    <div>
        <h2>
            <a href="/">{title}</a>
        </h2>
    </div>
    <div class="flex flex-1 flex-wrap justify-end gap-2">
        <Button type="primary" href="/todo">To-do</Button>
        <Button type="primary" href="/lorem">Lorem</Button>
        <Button type="primary" href="/simple-layout">Simple layout</Button>
        <Button type="primary" icon on:click={darkTheme.toggle}>
            <svelte:component this={$darkTheme ? Icon.Sun : Icon.Moon} />
        </Button>
    </div>
</header>
