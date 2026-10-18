<script lang="ts">
    import { ProgressBar } from "@prgm/sveltekit-progress-bar"
    import Cookies from "js-cookie"
    import { watch } from "runed"
    import { untrack } from "svelte"
    import SvelteSeo from "svelte-seo"

    import { ToastContainer } from "./_components"

    import { page } from "$app/state"
    import {
        currentLocale,
        locales,
        replaceLocaleInUrlWithoutSearchParams,
        setLocale
    } from "$i18n/helpers"
    import { env } from "$lib/utils"

    // eslint-disable-next-line import-x/no-unassigned-import
    import "uno.css"
    // eslint-disable-next-line import-x/no-unassigned-import
    import "@unocss/reset/tailwind.css"
    // eslint-disable-next-line import-x/no-unassigned-import
    import "$styles/global.css"

    const { data, children } = $props()

    setLocale(untrack(() => data.locale))

    watch(
        () => $currentLocale,
        locale => {
            Cookies.set("locale", locale, {
                path: "/",
                expires: 100,
                sameSite: "lax"
            })
        }
    )
</script>

<SvelteSeo
    title={env.PUBLIC_TITLE}
    applicationName={env.PUBLIC_TITLE}
    canonical={`${env.PUBLIC_BASE_URL}${page.url.pathname}`}
    languageAlternates={locales.map(locale => ({
        hreflang: locale,
        href: `${env.PUBLIC_BASE_URL}${replaceLocaleInUrlWithoutSearchParams(page.url, locale)}`
    }))}
/>

<ProgressBar class={"u:text-green-500" as any} />
{@render children?.()}
<ToastContainer />
