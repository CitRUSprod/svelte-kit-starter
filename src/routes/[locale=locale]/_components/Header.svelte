<script lang="ts">
    import { page } from "$app/state"
    import {
        ll,
        currentLocale,
        locales,
        localePath,
        replaceLocaleInUrlWithoutSearchParams
    } from "$i18n/helpers"
    import { Button } from "$lib/components"
    import { darkTheme } from "$lib/stores"
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
        <div class="u:flex u:items-center u:gap-1 u:mx-1">
            {#each locales as locale, index (locale)}
                <Button
                    class={["u:px-1", { "u:opacity-50": $currentLocale !== locale }]}
                    href={replaceLocaleInUrlWithoutSearchParams(page.url, locale)}
                    variant="primary"
                >
                    {locale.toUpperCase()}
                </Button>
                {#if index < locales.length - 1}
                    <div class="u:font-bold">/</div>
                {/if}
            {/each}
        </div>
        <Button icon variant="primary" onclick={darkTheme.toggle}>
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
