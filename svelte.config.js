import preprocess from "svelte-preprocess"
import icons from "unplugin-icons/vite"
import adapterNode from "@sveltejs/adapter-node"
import adapterStatic from "@sveltejs/adapter-static"

/** @type {import("@sveltejs/kit").Config} */
const config = {
    preprocess: preprocess({
        postcss: true
    }),
    kit: {
        adapter:
            process.env.MODE === "ssg"
                ? adapterStatic({
                      pages: "dist",
                      assets: "dist"
                  })
                : adapterNode({ out: "dist" }),
        vite: {
            plugins: [icons({ compiler: "svelte" })]
        }
    }
}

export default config
