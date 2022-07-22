<script lang="ts">
    import { Button, TextField, TextArea, Modal } from "$lib/components"

    import { goto } from "$app/navigation"
    import { t, localePath } from "$lib/locales"
    import { posts } from "$lib/stores"

    let visible = false

    let title = ""
    let content = ""

    $: trimmedTitle = title.trim()
    $: trimmedContent = content.trim()

    $: disabled = !(trimmedTitle && trimmedContent)

    export function open() {
        title = ""
        content = ""

        visible = true
    }

    export function close() {
        visible = false
    }

    function createPost() {
        if (!disabled) {
            posts.add(trimmedTitle, trimmedContent)
            const newPost = $posts.at(-1)!
            goto($localePath(`/posts/${String(newPost.id)}`))
        }
    }
</script>

<Modal class="flex flex-col gap-4 w-200" bind:visible>
    <div>
        <h1 class="text-center">{$t("components.modal-post-creating.post-creating")}</h1>
    </div>
    <div>
        <TextField
            label={$t("components.modal-post-creating.title")}
            placeholder={$t("components.modal-post-creating.enter-title")}
            bind:value={title}
        />
    </div>
    <div>
        <TextArea
            class="resize-none"
            label={$t("components.modal-post-creating.content")}
            placeholder={$t("components.modal-post-creating.enter-content")}
            bind:value={content}
        />
    </div>
    <div class="flex justify-between">
        <Button type="error" text on:click={close}>
            {$t("components.modal-post-creating.cancel")}
        </Button>
        <Button type="success" {disabled} on:click={createPost}>
            {$t("components.modal-post-creating.create")}
        </Button>
    </div>
</Modal>
