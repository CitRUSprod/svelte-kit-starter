<script lang="ts">
    import { Content, Button } from "$lib/components"
    import { t } from "$lib/locales"
    import { toasts } from "$lib/stores"
    import { env } from "$lib/utils"

    let count = $state(0)

    function addOne() {
        count++
        toasts.add("success", `${String($t("routes.home.count"))}: ${count}`)
    }
</script>

<svelte:head>
    <title>{$t("routes.home.home")}</title>
</svelte:head>

<Content.Center>
    <div class="u:p-8 u:border-primary u:rounded-lg u:border u:text-center">
        <h1>{env.PUBLIC_TITLE}</h1>
        <div class="u:flex u:justify-center u:mt-5">
            <Button type="primary" onclick={addOne}>
                {$t("routes.home.clicked")}: {count}
            </Button>
        </div>
    </div>
</Content.Center>
