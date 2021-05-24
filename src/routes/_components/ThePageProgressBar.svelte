<script lang="ts">
    import { navigating } from "$app/stores"
    import NProgress from "nprogress"

    NProgress.configure({
        showSpinner: false
    })

    function watchForChanging(changing: boolean) {
        if (changing) {
            NProgress.start()
        } else {
            NProgress.done()
        }
    }

    $: watchForChanging(!!$navigating)
</script>

<style lang="scss" global>
    #nprogress {
        pointer-events: none;

        .bar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #09b42e;
            z-index: 1000;
        }
    }
</style>
