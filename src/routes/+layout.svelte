<script lang="ts">
    import type { Snippet } from "svelte"

    import { PageProgressBar, ToastContainer } from "./_components"

    import type { Locale } from "$i18n/helpers"
    import { setLocale } from "$i18n/helpers"

    // eslint-disable-next-line import-x/no-unassigned-import
    import "uno.css"
    // eslint-disable-next-line import-x/no-unassigned-import
    import "@unocss/reset/tailwind.css"
    // eslint-disable-next-line import-x/no-unassigned-import
    import "$styles/global.css"

    interface Props {
        data: { locale: Locale }
        children?: Snippet
    }

    const { data, children }: Props = $props()

    $effect(() => {
        setLocale(data.locale)
    })
</script>

<PageProgressBar />
{@render children?.()}
<ToastContainer />
