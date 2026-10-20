import { sveltekit } from "@sveltejs/kit/vite"
import unocss from "unocss/vite"

const isWsl = "WSL_DISTRO_NAME" in process.env

/** @type {import("vite").UserConfig} */
const config = {
    server: {
        port: 6400,
        host: !isWsl
    },
    plugins: [unocss(), sveltekit()]
}

export default config
