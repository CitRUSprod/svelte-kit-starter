function getColors(color, shade) {
    return {
        lighter: `${color}-${shade - 100}`,
        default: `${color}-${shade}`,
        darker: `${color}-${shade + 100}`
    }
}

export const contentColors = {
    light: "white",
    dark: "zinc-800"
}

export const specialColors = {
    default: {
        light: getColors("slate", 400),
        dark: getColors("slate", 600)
    },
    primary: {
        light: getColors("orange", 400),
        dark: getColors("teal", 700)
    },
    success: {
        light: getColors("green", 500),
        dark: getColors("green", 600)
    },
    error: {
        light: getColors("red", 400),
        dark: getColors("red", 500)
    },
    warning: {
        light: getColors("yellow", 400),
        dark: getColors("yellow", 500)
    },
    info: {
        light: getColors("sky", 400),
        dark: getColors("sky", 500)
    }
}

export const utils = ["bg", "text", "border", "placeholder"]
