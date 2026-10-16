import { Type } from "@sinclair/typebox"

import { parseByAjvSchema } from "./ajv"

import * as publicEnv from "$env/static/public"

// eslint-disable-next-line new-cap
const schema = Type.Strict(
    // eslint-disable-next-line new-cap
    Type.Object(
        {
            // eslint-disable-next-line new-cap
            PUBLIC_TITLE: Type.String({ minLength: 1, transform: ["trim"] })
        },
        { additionalProperties: false }
    )
)

export const env = parseByAjvSchema(schema, publicEnv, "env")
