<script lang="ts">
    import { onDestroy } from "svelte"
    import NProgress from "nprogress"
    import { beforeNavigate, afterNavigate } from "$app/navigation"

    NProgress.configure({
        showSpinner: false
    })

    beforeNavigate(() => {
        NProgress.start()
    })

    afterNavigate(() => {
        NProgress.done()
    })

    onDestroy(() => {
        NProgress.done()
    })
</script>

{#if false}
    <div />
{/if}
