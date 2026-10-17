import { z } from "zod"

export function $env() {
    return z.object({
        PUBLIC_TITLE: z.string().trim().min(1)
    })
}

export type $Env = z.infer<ReturnType<typeof $env>>
