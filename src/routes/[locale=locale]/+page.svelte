<script lang="ts">
    import { ll } from "$i18n/helpers"
    import { Content, Button } from "$lib/components"
    import { toasts } from "$lib/stores"
    import { env } from "$lib/utils"

    let count = $state(0)

    function addOne() {
        count++
        toasts.add("success", `${String($ll.count())}: ${count}`)
    }
</script>

<svelte:head>
    <title>{$ll.home()}</title>
</svelte:head>

<Content.Center>
    <div class="u:p-8 u:border-primary u:rounded-lg u:border u:text-center">
        <h1>{env.PUBLIC_TITLE}</h1>
        <div class="u:flex u:justify-center u:mt-5">
            <Button variant="primary" onClick={addOne}>
                {$ll.clicked()}: {count}
            </Button>
        </div>
    </div>
</Content.Center>
