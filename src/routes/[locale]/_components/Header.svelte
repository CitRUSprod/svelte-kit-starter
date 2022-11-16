<script lang="ts">
    import { Icon, Button } from "$lib/components"

    import classNames from "classnames"
    import { darkTheme } from "$lib/stores"
    import { t, currentLocale, locales, localePath } from "$lib/locales"
    import { env } from "$lib/utils"

    export let route: string
</script>

<header
    class="u-flex u-items-center u-gap-2 u-px-6 u-py-2 u-bg-primary u-text-content-lighter u-shadow-lg"
>
    <div>
        <h2>
            <a href={$localePath("/")}>{env.PUBLIC_TITLE}</a>
        </h2>
    </div>
    <div class="u-flex u-flex-1 u-flex-wrap u-justify-end u-gap-2">
        <Button type="primary" href={$localePath("/todo")}>{$t("components.header.todo")}</Button>
        <Button type="primary" href={$localePath("/lorem")}>Lorem</Button>
        <Button type="primary" href={$localePath("/simple-layout")}>
            {$t("components.header.simple-layout")}
        </Button>
        <Button type="primary" href={$localePath("/posts")}>
            {$t("components.header.posts")}
        </Button>
        <div class="u-flex u-items-center u-gap-1 u-mx-1">
            {#each $locales as locale, index (locale)}
                <Button
                    class={classNames("u-px-1", { "u-opacity-50": $currentLocale !== locale })}
                    type="primary"
                    href={$localePath(route, locale)}
                >
                    {locale.toUpperCase()}
                </Button>
                {#if index < $locales.length - 1}
                    <div class="u-font-bold">/</div>
                {/if}
            {/each}
        </div>
        <Button type="primary" icon on:click={darkTheme.toggle}>
            <svelte:component this={$darkTheme ? Icon.Sun : Icon.Moon} />
        </Button>
        <Button
            type="primary"
            href="https://github.com/CitRUSprod/svelte-kit-starter"
            target="_blank"
            rel="noopener noreferrer"
            icon
        >
            <Icon.GitHub />
        </Button>
    </div>
</header>
