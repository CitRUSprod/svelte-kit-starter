import type { FormattersInitializer } from "typesafe-i18n"

import type { Locales as Locale, Formatters } from "$i18n/i18n-types"

export const initFormatters: FormattersInitializer<Locale, Formatters> = () => {
    const formatters: Formatters = {
        // добавьте свои функции-форматтеры здесь
    }

    return formatters
}
