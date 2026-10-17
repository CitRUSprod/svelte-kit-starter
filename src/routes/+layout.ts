import { loadLocaleAsync } from "$i18n/helpers"

export async function load(e) {
    await loadLocaleAsync(e.data.locale)
    return { locale: e.data.locale }
}
