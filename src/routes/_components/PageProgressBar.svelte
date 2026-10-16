<script lang="ts">
    import NProgress from "nprogress"
    import { onDestroy } from "svelte"

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
    <div></div>
{/if}
