<script lang="ts">
    import { LocaleSwitcher } from "./_components"

    import { ll, localePath } from "$i18n/helpers"
    import { Button } from "$lib/components"
    import { theme } from "$lib/stores"
    import { env } from "$lib/utils"
</script>

<header
    class="u:flex u:items-center u:gap-2 u:px-6 u:py-2 u:bg-primary u:text-content-lighter u:shadow-lg"
>
    <div>
        <h2>
            <a href={$localePath("/")}>{env.PUBLIC_TITLE}</a>
        </h2>
    </div>
    <div class="u:flex u:flex-1 u:flex-wrap u:justify-end u:gap-2">
        <Button href={$localePath("/todo")} variant="primary">{$ll.todo()}</Button>
        <Button href={$localePath("/lorem")} variant="primary">Lorem</Button>
        <Button href={$localePath("/simple-layout")} variant="primary">
            {$ll.simpleLayout()}
        </Button>
        <Button href={$localePath("/posts")} variant="primary">
            {$ll.posts()}
        </Button>
        <LocaleSwitcher />
        <Button icon variant="primary" onClick={theme.toggle}>
            <i class="u:i-fa-solid-sun u:dark:i-fa-solid-moon u:text-xl"></i>
        </Button>
        <Button
            href="https://github.com/CitRUSprod/svelte-kit-starter"
            icon
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
        >
            <i class="u:i-icomoon-free-github u:text-xl"></i>
        </Button>
    </div>
</header>
