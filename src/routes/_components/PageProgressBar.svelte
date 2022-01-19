<script lang="ts">
    import { onDestroy } from "svelte"
    import NProgress from "nprogress"
    import { navigating } from "$app/stores"

    NProgress.configure({
        showSpinner: false
    })

    $: if ($navigating) {
        NProgress.start()
    } else {
        NProgress.done()
    }

    onDestroy(() => {
        NProgress.done()
    })
</script>

{#if false}
    <div />
{/if}

<style lang="postcss" global>
    #nprogress {
        @apply pointer-events-none;
    }

    #nprogress .bar {
        @apply fixed top-0 left-0 w-full h-0.5 bg-green-500 z-1000;
    }
</style>
