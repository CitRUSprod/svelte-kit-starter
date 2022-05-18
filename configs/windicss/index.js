import colors from "windicss/colors"
import { contentColors, specialColors, utils } from "./colors"

function getFullPalette() {
    return Object.fromEntries(Object.entries(colors).filter(([color]) => !color.match(/[A-Z]/)))
}

function getShortcuts(util) {
    let result = {}

    for (const color of Object.keys(specialColors)) {
        const base = `${util}-${color}`
        const c = specialColors[color]
        result = {
            ...result,
            [`${base}-lighter`]: `${util}-${c.light.lighter} dark:${util}-${c.dark.lighter}`,
            [base]: `${util}-${c.light.default} dark:${util}-${c.dark.default}`,
            [`${base}-darker`]: `${util}-${c.light.darker} dark:${util}-${c.dark.darker}`
        }
    }

    return result
}

function getShortcutsForAllUtils() {
    let result = {}

    for (const util of utils) {
        result = {
            ...result,
            ...getShortcuts(util),
            [`${util}-content`]: `${util}-${contentColors.light} dark:${util}-${contentColors.dark}`,
            [`${util}-content-inverse`]: `${util}-${contentColors.dark} dark:${util}-${contentColors.light}`,
            [`${util}-content-light`]: `${util}-${contentColors.light}`,
            [`${util}-content-dark`]: `${util}-${contentColors.dark}`
        }
    }

    return result
}

/** @type {import("windicss/types/interfaces").FullConfig} */
const config = {
    extract: {
        include: ["./src/**/*.svelte"]
    },
    darkMode: "class",
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            ...getFullPalette()
        }
    },
    shortcuts: getShortcutsForAllUtils()
}

export default config
