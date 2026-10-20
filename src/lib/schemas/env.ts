import { z } from "zod"

export function $env() {
    return z.object({
        PUBLIC_TITLE: z.string().trim().min(1),
        PUBLIC_BASE_URL: z.url()
    })
}

export type $Env = z.infer<ReturnType<typeof $env>>
