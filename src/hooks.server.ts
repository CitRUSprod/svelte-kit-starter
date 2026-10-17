import type { Handle, RequestEvent } from "@sveltejs/kit"
import { redirect } from "@sveltejs/kit"
import { detectLocale, initAcceptLanguageHeaderDetector } from "typesafe-i18n/detectors"

import type { Locale } from "$i18n/helpers"
import { defaultLocale, locales, i18n, isLocale, loadAllLocales } from "$i18n/helpers"

loadAllLocales()

const l = i18n()

function getPreferredLocale(e: RequestEvent) {
    const acceptLanguageDetector = initAcceptLanguageHeaderDetector(e.request)
    return detectLocale(defaultLocale, locales, acceptLanguageDetector)
}

export const handle: Handle = async ({ event: e, resolve }) => {
    const [, locale, ...pathname] = e.url.pathname.split("/")

    if (!(locale && isLocale(locale))) {
        const localeFromCookie = e.cookies.get("locale")

        let localLocale: Locale

        if (localeFromCookie && isLocale(localeFromCookie)) {
            localLocale = localeFromCookie
        } else {
            localLocale = getPreferredLocale(e)
        }

        const localPathname = pathname.length > 0 ? `/${pathname.join("/")}` : ""

        redirect(307, `/${localLocale}${locale ? `/${locale}` : ""}${localPathname}${e.url.search}`)
    }

    e.locals.locale = locale
    e.locals.ll = l[locale]

    const response = await resolve(e, {
        transformPageChunk({ html }) {
            return html.replace(/<html.*>/, `<html lang="${locale}">`)
        }
    })

    const localeCookie = `locale=${locale}; Path=/; Max-Age=${100 * 24 * 60 * 60}; SameSite=Lax`

    response.headers.append("set-cookie", localeCookie)

    return response
}
