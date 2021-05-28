<script lang="ts">
    import { ThePageProgressBar, TheHeader, TheContent } from "./_components"
</script>

<ThePageProgressBar />
<TheHeader />
<TheContent>
    <slot />
</TheContent>

<style lang="scss" global>
    @import "vars";
    @import "bootstrap/scss/bootstrap";

    body,
    #svelte {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    :root {
        height: 100%;
    }
</style>
