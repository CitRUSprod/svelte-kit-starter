/** @type {import("eslint").Linter.Config} */
const config = {
    extends: [
        "@citrus-linting",
        "@citrus-linting/eslint-config/typescript",
        "@citrus-linting/eslint-config/svelte-typescript",
        "prettier"
    ],
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": [2]
    },
    overrides: [
        {
            files: ["*.json"],
            parser: "any-eslint-parser"
        },
        {
            files: ["*.y?(a)ml"],
            parser: "any-eslint-parser"
        },
        {
            files: ["*.html"],
            parser: "any-eslint-parser",
            rules: {
                "prettier/prettier": [2, { parser: "html" }]
            }
        },
        {
            files: ["*.md"],
            parser: "any-eslint-parser",
            rules: {
                "prettier/prettier": [2, { parser: "markdown" }]
            }
        },
        {
            files: ["*.svelte"],
            rules: {
                "@ota-meshi/svelte/valid-compile": 0
            }
        }
    ]
}

module.exports = config
