<script lang="ts">
    import { ProgressBar } from "@prgm/sveltekit-progress-bar"
    import Cookies from "js-cookie"
    import { watch } from "runed"
    import { untrack } from "svelte"

    import { ToastContainer } from "./_components"

    import { currentLocale, setLocale } from "$i18n/helpers"

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

<ProgressBar class={"u:text-green-500" as any} />
{@render children?.()}
<ToastContainer />
