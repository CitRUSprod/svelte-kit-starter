module.exports = {
    extends: [
        "@citrus-linting/stylelint-config",
        "@citrus-linting/stylelint-config/scss",
        "stylelint-config-prettier"
    ],
    rules: {
        "selector-pseudo-class-no-unknown": [true, { ignorePseudoClasses: ["global"] }]
    }
}
