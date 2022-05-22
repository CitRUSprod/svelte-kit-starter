import { derived } from "svelte/store"
import I18n from "sveltekit-i18n"

import type { Config } from "sveltekit-i18n"

export const defaultLocale = "en" as string

const config: Config = {
    loaders: [
        {
            locale: "en",
            key: "alert",
            loader: async () => (await import("./en/alert.json")).default
        },
        {
            locale: "ru",
            key: "alert",
            loader: async () => (await import("./ru/alert.json")).default
        },
        {
            locale: "en",
            key: "header",
            loader: async () => (await import("./en/header.json")).default
        },
        {
            locale: "ru",
            key: "header",
            loader: async () => (await import("./ru/header.json")).default
        },
        {
            locale: "en",
            key: "error",
            routes: ["error"],
            loader: async () => (await import("./en/error.json")).default
        },
        {
            locale: "ru",
            key: "error",
            routes: ["error"],
            loader: async () => (await import("./ru/error.json")).default
        },
        {
            locale: "en",
            key: "home",
            routes: ["/"],
            loader: async () => (await import("./en/home.json")).default
        },
        {
            locale: "ru",
            key: "home",
            routes: ["/"],
            loader: async () => (await import("./ru/home.json")).default
        },
        {
            locale: "en",
            key: "todo",
            routes: ["/todo"],
            loader: async () => (await import("./en/todo.json")).default
        },
        {
            locale: "ru",
            key: "todo",
            routes: ["/todo"],
            loader: async () => (await import("./ru/todo.json")).default
        },
        {
            locale: "en",
            key: "simpleLayout",
            routes: ["/simple-layout"],
            loader: async () => (await import("./en/simple-layout.json")).default
        },
        {
            locale: "ru",
            key: "simpleLayout",
            routes: ["/simple-layout"],
            loader: async () => (await import("./ru/simple-layout.json")).default
        },
        {
            locale: "en",
            key: "posts",
            loader: async () => (await import("./en/posts.json")).default
        },
        {
            locale: "ru",
            key: "posts",
            loader: async () => (await import("./ru/posts.json")).default
        }
    ]
}

const { t, locale: lcl, locales, loadTranslations } = new I18n(config)

export { t, locales, loadTranslations }

export const currentLocale = {
    subscribe: lcl.subscribe,
    get: lcl.get
}

export const localePath = derived(
    currentLocale,
    l => (path: string, locale?: string) => `/${locale ?? l}${path === "/" ? "" : path}`
)
