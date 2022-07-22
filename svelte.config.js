import preprocess from "svelte-preprocess"
import adapterNode from "@sveltejs/adapter-node"
import adapterAuto from "@sveltejs/adapter-auto"

/** @type {import("@sveltejs/kit").Config} */
const config = {
    preprocess: preprocess({
        postcss: true
    }),
    kit: {
        adapter: process.env.ADAPTER === "auto" ? adapterAuto() : adapterNode({ out: "dist" })
    }
}

export default config
