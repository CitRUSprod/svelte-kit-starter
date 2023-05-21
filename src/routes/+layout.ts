import { loadTranslations } from "$lib/locales"
import { getLocaleAndRoute } from "$lib/utils"

export async function load({ url }) {
    const { locale, route } = getLocaleAndRoute(url.pathname)
    await loadTranslations(locale!, route)
    return { route }
}
