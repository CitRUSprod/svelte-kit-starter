import preprocess from "svelte-preprocess"
import node from "@sveltejs/adapter-node"

/** @type {import("@sveltejs/kit").Config} */
const config = {
    preprocess: preprocess({
        postcss: true
    }),
    kit: {
        adapter: node({ out: "dist" })
    }
}

export default config
