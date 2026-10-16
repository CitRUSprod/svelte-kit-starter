import stores from "@sveltekit-i18n/extension-stores"
import { derived } from "svelte/store"
import type { Config } from "sveltekit-i18n"
import I18n from "sveltekit-i18n"

export const defaultLocale = "en" as string

const localeList = ["en", "ru"]

type LoaderModule = NonNullable<Config["loaders"]>[number]
type LoaderRoutes = LoaderModule["routes"]

function createLocaleLoaders(path: string, routes: LoaderRoutes): Array<LoaderModule> {
    const parts = path.split("/")

    const componentPartIndex = parts.indexOf("_components")

    if (componentPartIndex >= 0) {
        parts.splice(0, componentPartIndex)
        parts[0] = "components"
    }

    if (parts[parts.length - 1] === "index") {
        parts.length -= 1
    }

    return localeList.map(locale => ({
        locale,
        namespace: parts.join("."),
        routes,
        loader: async () => (await import(`./${locale}/${path}.json`)).default
    }))
}

function createAllLoaders(...args: Array<[string, LoaderRoutes]>) {
    return args.flatMap(([path, routes]) => createLocaleLoaders(path, routes))
}

const config: Config = {
    loaders: createAllLoaders(
        ["components/alert", undefined],
        ["routes/_components/header", undefined],
        ["routes/error", undefined],
        ["routes/home", ["/"]],
        ["routes/todo", ["/todo"]],
        ["routes/simple-layout", ["/simple-layout"]],
        ["routes/posts/index", ["/posts"]],
        ["routes/posts/_components/modal-post-creating", ["/posts"]],
        ["routes/posts/[id]/index", [/^\/posts\/\d+$/]],
        ["routes/posts/[id]/_components/modal-post-editing", [/^\/posts\/\d+$/]],
        ["routes/posts/[id]/_components/modal-post-removing", [/^\/posts\/\d+$/]]
    )
}

const { t, locale: lcl, locales, loadTranslations } = new I18n({ ...config, extensions: [stores] })

export { t, locales, loadTranslations }

export const currentLocale = {
    subscribe: lcl.subscribe,
    get: lcl.get
}

export const localePath = derived(
    currentLocale,
    l => (path: string, locale?: string) => `/${locale ?? l}${path === "/" ? "" : path}`
)
