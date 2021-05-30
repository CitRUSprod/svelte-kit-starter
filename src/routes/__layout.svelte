<script lang="ts">
    import { ThePageProgressBar, TheHeader, TheContent } from "./_components"
</script>

<ThePageProgressBar />
<TheHeader />
<TheContent>
    <slot />
</TheContent>

<style lang="postcss" global>
    @import "tailwindcss/tailwind";
</style>
