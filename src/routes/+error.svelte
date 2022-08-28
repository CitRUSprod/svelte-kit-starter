<script lang="ts">
    import { Content, Button } from "$lib/components"

    import { page } from "$app/stores"
    import { t, localePath } from "$lib/locales"
</script>

<svelte:head>
    <title>{$t("routes.error.error")} {$page.status}</title>
</svelte:head>

<main class="relative flex-1">
    <Content.Center>
        <div class="border-error rounded-lg border text-center p-8">
            <h1>{$t("routes.error.error")} {$page.status}</h1>
            {#if $page.error}
                <h2>{$page.error.message}</h2>
            {/if}
            <div class="flex justify-center mt-5">
                <Button type="error" href={$localePath("/")}>
                    {$t("routes.error.go-home")}
                </Button>
            </div>
        </div>
    </Content.Center>
</main>
