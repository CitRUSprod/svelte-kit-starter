<script lang="ts">
    import { goto } from "$app/navigation"
    import * as api from "$lib/api"
    import { Button, TextField, TextArea, Modal } from "$lib/components"
    import { t, localePath } from "$lib/locales"

    let visible = $state(false)
    let loading = $state(false)

    let title = $state("")
    let content = $state("")

    const trimmedTitle = $derived(title.trim())
    const trimmedContent = $derived(content.trim())

    const disabled = $derived(!(trimmedTitle && trimmedContent))

    export function open() {
        title = ""
        content = ""

        visible = true
    }

    export function close() {
        visible = false
    }

    async function createPost() {
        if (!disabled) {
            loading = true
            const post = await api.posts.createPost({
                title: trimmedTitle,
                content: trimmedContent
            })
            loading = false
            close()
            goto($localePath(`/posts/${post.id}`))
        }
    }
</script>

<Modal class="u:flex u:flex-col u:gap-4 u:w-200" persistent={loading} bind:visible>
    <div>
        <h1 class="u:text-center">{$t("components.modal-post-creating.post-creating")}</h1>
    </div>
    <div>
        <TextField
            disabled={loading}
            label={$t("components.modal-post-creating.title")}
            placeholder={$t("components.modal-post-creating.enter-title")}
            bind:value={title}
        />
    </div>
    <div>
        <TextArea
            class="u:resize-none"
            disabled={loading}
            label={$t("components.modal-post-creating.content")}
            placeholder={$t("components.modal-post-creating.enter-content")}
            bind:value={content}
        />
    </div>
    <div class="u:flex u:justify-between">
        <Button disabled={loading} text type="error" onclick={close}>
            {$t("components.modal-post-creating.cancel")}
        </Button>
        <Button {disabled} {loading} type="success" onclick={createPost}>
            {$t("components.modal-post-creating.create")}
        </Button>
    </div>
</Modal>
