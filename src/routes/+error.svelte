<script lang="ts">
    import SvelteSeo from "svelte-seo"

    import { page } from "$app/state"
    import { ll, localePath } from "$i18n/helpers"
    import { ContentCenter, Button } from "$lib/components"
</script>

<SvelteSeo title={`${$ll.error()} ${String(page.status)}`} noindex />

<main class="u:relative u:flex-1">
    <ContentCenter>
        <div class="u:p-8 u:border-error u:rounded-lg u:border u:text-center">
            <h1>{$ll.error()} {page.status}</h1>
            {#if page.error}
                <h2>{page.error.message}</h2>
            {/if}
            <div class="u:flex u:justify-center u:mt-5">
                <Button href={$localePath("/")} variant="error">
                    {$ll.goHome()}
                </Button>
            </div>
        </div>
    </ContentCenter>
</main>
