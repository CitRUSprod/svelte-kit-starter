<script lang="ts">
    import SvelteSeo from "svelte-seo"

    import { ll, localePath } from "$i18n/helpers"
    import { ContentCenter, Button } from "$lib/components"
</script>

<SvelteSeo title={$ll.simpleLayout()} noindex />

<ContentCenter>
    <div class="u:p-8 u:border-primary u:rounded-lg u:border u:text-center">
        <h1>{$ll.simpleLayout()}</h1>
        <div class="u:flex u:justify-center u:mt-5">
            <Button href={$localePath("/")} variant="primary">
                {$ll.goHome()}
            </Button>
        </div>
    </div>
</ContentCenter>
