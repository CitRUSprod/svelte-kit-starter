import { defaultLocale, locales } from "$lib/locales"

import type { Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ request, resolve }) => {
    const { pathname } = request.url

    const supportedLocales = locales.get()
    let currentLocale = /[^/]+?(?=\/|$)/.exec(pathname)?.toString()

    if (!currentLocale || !supportedLocales.includes(currentLocale)) {
        currentLocale = /[a-z]{2}/
            .exec(request.headers["accept-language"])
            ?.toString()
            .toLowerCase()

        if (!currentLocale || !supportedLocales.includes(currentLocale)) {
            currentLocale = defaultLocale
        }

        return {
            status: 301,
            headers: {
                location: `/${currentLocale}${pathname}`
            }
        }
    }

    const response = await resolve(request)
    return {
        ...response,
        body: response.body?.toString().replace(/<html.*>/, `<html lang="${currentLocale}">`)
    }
}
