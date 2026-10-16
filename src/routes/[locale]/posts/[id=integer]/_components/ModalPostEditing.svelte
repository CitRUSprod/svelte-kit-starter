<script lang="ts">
    import * as api from "$lib/api"
    import { Button, TextField, TextArea, Modal } from "$lib/components"
    import { t } from "$lib/locales"
    import type { Post } from "$lib/types"

    interface Props {
        post: Readonly<Post>
    }

    const { post }: Props = $props()

    let visible = $state(false)
    let loading = $state(false)

    let title = $state("")
    let content = $state("")

    const trimmedTitle = $derived(title.trim())
    const trimmedContent = $derived(content.trim())

    const disabled = $derived(
        !(trimmedTitle && trimmedContent) ||
            (trimmedTitle === post.title && trimmedContent === post.content)
    )

    export function open() {
        title = post.title
        content = post.content

        visible = true
    }

    export function close() {
        visible = false
    }

    async function editPost() {
        if (!disabled) {
            loading = true
            await api.posts.editPost({
                id: post.id,
                title: trimmedTitle,
                content: trimmedContent
            })
            loading = false
            close()
        }
    }
</script>

<Modal class="u:flex u:flex-col u:gap-4 u:w-200" persistent={loading} bind:visible>
    <div>
        <h1 class="u:text-center">{$t("components.modal-post-editing.post-editing")}</h1>
    </div>
    <div>
        <TextField
            disabled={loading}
            label={$t("components.modal-post-editing.title")}
            placeholder={$t("components.modal-post-editing.enter-title")}
            bind:value={title}
        />
    </div>
    <div>
        <TextArea
            class="u:resize-none"
            disabled={loading}
            label={$t("components.modal-post-editing.content")}
            placeholder={$t("components.modal-post-editing.enter-content")}
            bind:value={content}
        />
    </div>
    <div class="u:flex u:justify-between">
        <Button disabled={loading} text type="error" onclick={close}>
            {$t("components.modal-post-editing.cancel")}
        </Button>
        <Button {disabled} {loading} type="success" onclick={editPost}>
            {$t("components.modal-post-editing.edit")}
        </Button>
    </div>
</Modal>
