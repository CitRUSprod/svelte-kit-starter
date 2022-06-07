<script lang="ts">
    import { Content, Button } from "$lib/components"

    import { t, localePath } from "$lib/locales"
</script>

<svelte:head>
    <title>{$t("simpleLayout.simpleLayout")}</title>
</svelte:head>

<Content.Center>
    <div class="border-primary rounded-lg border text-center p-8">
        <h1>{$t("simpleLayout.simpleLayout")}</h1>
        <div class="flex justify-center mt-5">
            <Button type="primary" href={$localePath("/")}>
                {$t("simpleLayout.goHome")}
            </Button>
        </div>
    </div>
</Content.Center>
