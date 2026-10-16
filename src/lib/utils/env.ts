import { Type } from "@sinclair/typebox"

import { parseByAjvSchema } from "./ajv"

import * as publicEnv from "$env/static/public"

const schema = Type.Strict(
    Type.Object(
        {
            PUBLIC_TITLE: Type.String({ minLength: 1, transform: ["trim"] })
        },
        { additionalProperties: false }
    )
)

export const env = parseByAjvSchema(schema, publicEnv, "env")
