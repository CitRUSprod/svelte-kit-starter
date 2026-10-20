import { parseDataBySchema } from "./validation"

import * as publicEnv from "$env/static/public"
import { $env } from "$lib/schemas"

export const env = parseDataBySchema($env(), publicEnv)
