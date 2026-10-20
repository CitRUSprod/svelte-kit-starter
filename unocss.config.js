import path from "node:path"

import extractorSvelte from "@unocss/extractor-svelte"
import { colors, presetWind3 } from "@unocss/preset-wind3"
import { presetIcons, transformerDirectives } from "unocss"
import { presetBetterNestedColors } from "unocss-preset-better-nested-colors"

function getColors([lightColor, lightShade], [darkColor, darkShade]) {
    return {
        DEFAULT: `${lightColor}-${lightShade}`,
        ":dark": `${darkColor}-${darkShade}`,
        lighter: {
            DEFAULT: `${lightColor}-${lightShade - 100}`,
            ":dark": `${darkColor}-${darkShade + 100}`
        },
        darker: {
            DEFAULT: `${lightColor}-${lightShade - 100}`,
            ":dark": `${darkColor}-${darkShade + 100}`
        }
    }
}

const contentColors = {
    light: "white",
    dark: "zinc-800"
}

const specialColors = {
    content: {
        DEFAULT: contentColors.light,
        ":dark": contentColors.dark,
        lighter: contentColors.light,
        darker: contentColors.dark,
        inverse: {
            DEFAULT: contentColors.dark,
            ":dark": contentColors.light
        }
    },
    default: getColors(["slate", 500], ["slate", 600]),
    primary: getColors(["orange", 400], ["teal", 700]),
    success: getColors(["green", 500], ["green", 600]),
    error: getColors(["red", 400], ["red", 500]),
    warning: getColors(["yellow", 400], ["yellow", 500]),
    info: getColors(["sky", 400], ["sky", 500])
}

const classPrefix = "u:"

/** @type {import("unocss/vite").VitePluginConfig} */
const config = {
    extractors: [extractorSvelte],
    presets: [
        presetWind3(),
        presetBetterNestedColors({
            colors: {
                ...colors,
                ...specialColors
            }
        }),
        presetIcons()
    ],
    content: {
        pipeline: {
            include: [path.join(import.meta.dirname, "src/**/*.svelte")]
        }
    },
    transformers: [transformerDirectives()],
    preprocess(matcher) {
        return matcher.startsWith(classPrefix) ? matcher.slice(classPrefix.length) : undefined
    }
}

export default config
