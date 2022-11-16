import unocss from "unocss/vite"
import { sveltekit } from "@sveltejs/kit/vite"
import icons from "unplugin-icons/vite"
import dynamicImport from "vite-plugin-dynamic-import"

/** @type {import("vite").UserConfig} */
const config = {
    server: {
        port: 6400
    },
    plugins: [unocss(), sveltekit(), icons({ compiler: "svelte" }), dynamicImport()]
}

export default config
