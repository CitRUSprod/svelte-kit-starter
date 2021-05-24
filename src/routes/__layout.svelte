<script lang="ts">
    import { ThePageProgressBar, TheHeader } from "./_components"
</script>

<ThePageProgressBar />
<TheHeader />
<main>
    <slot />
</main>

<style lang="scss">
    $measure: 4px;

    :global(body, #svelte) {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    :global(:root) {
        height: 100%;
    }

    main {
        flex-grow: 1;
        padding: $measure * 5;
    }
</style>
