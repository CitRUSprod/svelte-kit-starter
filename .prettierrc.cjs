module.exports = {
    plugins: ["./node_modules/prettier-plugin-packagejson"],
    printWidth: 80,
    semi: false,
    singleQuote: false,
    quoteProps: "as-needed",
    trailingComma: "none",
    bracketSpacing: true,
    arrowParens: "avoid",
    rangeStart: 0,
    rangeEnd: Infinity,
    proseWrap: "preserve",
    htmlWhitespaceSensitivity: "strict",
    overrides: [
        {
            files: "*.svelte",
            options: {
                plugins: ["./node_modules/prettier-plugin-svelte"],
                parser: "svelte",
                svelteSortOrder: "options-scripts-markup-styles",
                svelteStrictMode: true,
                svelteBracketNewLine: true,
                svelteAllowShorthand: true,
                svelteIndentScriptAndStyle: true
            }
        }
    ]
}
