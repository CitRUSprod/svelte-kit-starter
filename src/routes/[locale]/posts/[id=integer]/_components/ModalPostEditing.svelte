<script lang="ts">
    import { Button, TextField, TextArea, Modal } from "$lib/components"

    import { t } from "$lib/locales"
    import { posts } from "$lib/stores"

    import type { Post } from "$lib/types"

    export let post: Readonly<Post>

    let visible = false

    let title = ""
    let content = ""

    $: trimmedTitle = title.trim()
    $: trimmedContent = content.trim()

    $: disabled = !(trimmedTitle && trimmedContent)

    export function open() {
        title = post.title
        content = post.content

        visible = true
    }

    export function close() {
        visible = false
    }

    function editPost() {
        if (!disabled) {
            posts.edit(post.id, trimmedTitle, trimmedContent)
            visible = false
        }
    }
</script>

<Modal class="flex flex-col gap-4 w-200" bind:visible>
    <div>
        <h1 class="text-center">{$t("components.modal-post-editing.post-editing")}</h1>
    </div>
    <div>
        <TextField
            label={$t("components.modal-post-editing.title")}
            placeholder={$t("components.modal-post-editing.enter-title")}
            bind:value={title}
        />
    </div>
    <div>
        <TextArea
            class="resize-none"
            label={$t("components.modal-post-editing.content")}
            placeholder={$t("components.modal-post-editing.enter-content")}
            bind:value={content}
        />
    </div>
    <div class="flex justify-between">
        <Button type="error" text on:click={close}>
            {$t("components.modal-post-editing.cancel")}
        </Button>
        <Button type="success" {disabled} on:click={editPost}>
            {$t("components.modal-post-editing.save")}
        </Button>
    </div>
</Modal>
