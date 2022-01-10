<script lang="ts">
    import { Button, Icon } from "$lib/components"

    import { darkTheme } from "$lib/stores"
    import { title } from "$lib/env"

    const pages = [1, 2, 3, 4]
</script>

<div class="bg-neutral shadow-lg text-neutral-content mb-2 navbar">
    <div class="flex-none mx-2 px-2">
        <a class="font-bold text-lg" href="/">{title}</a>
    </div>
    <div class="flex-1 justify-end mx-2 px-2">
        {#each pages as page}
            <Button class="rounded-btn btn-ghost btn-sm" href={`/page/${page}`}>
                Page {page}
            </Button>
        {/each}
        <Button class="rounded-btn btn-ghost btn-sm" on:click={darkTheme.toggle}>
            <svelte:component this={$darkTheme ? Icon.Sun : Icon.Moon} />
        </Button>
    </div>
</div>
