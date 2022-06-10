import preprocess from "svelte-preprocess"
import icons from "unplugin-icons/vite"
import dynamicImport from "vite-plugin-dynamic-import"
import adapterNode from "@sveltejs/adapter-node"
import adapterAuto from "@sveltejs/adapter-auto"

/** @type {import("@sveltejs/kit").Config} */
const config = {
    preprocess: preprocess({
        postcss: true
    }),
    kit: {
        adapter: process.env.ADAPTER === "auto" ? adapterAuto() : adapterNode({ out: "dist" }),
        vite: {
            plugins: [icons({ compiler: "svelte" }), dynamicImport.default()]
        }
    }
}

export default config
