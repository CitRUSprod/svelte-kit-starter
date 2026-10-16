import baseConfig from "@citrus-linting/eslint-config"
import svelteTypescriptConfig from "@citrus-linting/eslint-config/svelte-typescript"
import typescriptConfig from "@citrus-linting/eslint-config/typescript"
import anyParser from "any-eslint-parser"
import prettierConfig from "eslint-config-prettier"
import prettier from "eslint-plugin-prettier"

const prettierRules = {
    "prettier/prettier": 2,
    "arrow-body-style": 0,
    "prefer-arrow-callback": 0
}

/** @type {import("eslint").Linter.Config[]} */
const config = [
    {
        ignores: ["**/pnpm-lock.yaml", "**/.svelte-kit", "**/dist"]
    },
    {
        plugins: { prettier }
    },
    {
        files: ["**/*.?([cm])js", "**/*.ts", "**/*.svelte"],
        rules: {
            ...prettierRules,
            "import-x/no-unassigned-import": [
                2,
                { allow: ["**/*.css", "@total-typescript/ts-reset"] }
            ],
            "new-cap": [2, { properties: false }]
        }
    },
    ...baseConfig,
    ...typescriptConfig,
    ...svelteTypescriptConfig,
    {
        files: ["**/*.json"],
        languageOptions: {
            parser: anyParser
        },
        rules: {
            "prettier/prettier": 2
        }
    },
    {
        files: ["**/*.y?(a)ml"],
        languageOptions: {
            parser: anyParser
        },
        rules: {
            "prettier/prettier": 2
        }
    },
    {
        files: ["**/*.md"],
        languageOptions: {
            parser: anyParser
        },
        rules: {
            "prettier/prettier": [2, { parser: "markdown" }]
        }
    },
    {
        files: ["**/*.html", "**/*.mjml"],
        languageOptions: {
            parser: anyParser
        },
        rules: {
            "prettier/prettier": [2, { parser: "html" }]
        }
    },
    prettierConfig
]

export default config
