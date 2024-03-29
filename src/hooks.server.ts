import { defaultLocale, locales } from "$lib/locales"
import { getLocaleAndRoute } from "$lib/utils"

const supportedLocales = locales.get()

export async function handle({ event: e, resolve }) {
    const { locale, route } = getLocaleAndRoute(e.url.pathname)

    if (!locale) {
        const lang = e.request.headers.get("accept-language") ?? ""
        const localeCandidate = /^[a-z]{2}\b/.exec(lang)?.toString()
        const isSupportedLocale = !!localeCandidate && supportedLocales.includes(localeCandidate)

        const headers = new Headers()
        headers.set("location", `/${isSupportedLocale ? localeCandidate : defaultLocale}${route}`)

        return new Response(undefined, { status: 301, headers })
    }

    const response = await resolve(e, {
        transformPageChunk({ html }) {
            return html.replace(/<html.*>/, `<html lang="${locale}">`)
        }
    })

    return response
}
