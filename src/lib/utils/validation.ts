import { z } from "zod"
import { fromError } from "zod-validation-error"

export function parseZodError(err: z.ZodError) {
    return fromError(err)
}

export function createValidator<T extends z.ZodType>(schema: T) {
    function validator(value: z.infer<typeof schema>) {
        const result = schema.safeParse(value)

        if (result.success) {
            return { valid: true, value: result.data }
        } else {
            return { valid: false, value }
        }
    }

    return validator
}

export function parseDataBySchema<T extends z.ZodType>(schema: T, data: unknown) {
    const result = schema.safeParse(data)

    if (result.success) {
        return result.data
    } else {
        throw parseZodError(result.error)
    }
}
