import adapterAuto from "@sveltejs/adapter-auto"
import adapterNode from "@sveltejs/adapter-node"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import("@sveltejs/kit").Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: process.env.ADAPTER === "auto" ? adapterAuto() : adapterNode({ out: "dist" }),
        alias: {
            $styles: "src/styles"
        }
    }
}

export default config
