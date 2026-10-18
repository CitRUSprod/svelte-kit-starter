<script lang="ts">
    import { ll } from "$i18n/helpers"
    import * as api from "$lib/api"
    import { Button, TextField, TextArea, Dialog } from "$lib/components"
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

<Dialog class="u:flex u:flex-col u:gap-4 u:w-200" persistent={loading} bind:visible>
    <div>
        <h1 class="u:text-center">{$ll.postEditing()}</h1>
    </div>
    <div>
        <TextField
            disabled={loading}
            label={$ll.title()}
            placeholder={$ll.enterTitle()}
            bind:value={title}
        />
    </div>
    <div>
        <TextArea
            class="u:resize-none"
            disabled={loading}
            label={$ll.content()}
            placeholder={$ll.enterContent()}
            bind:value={content}
        />
    </div>
    <div class="u:flex u:justify-between">
        <Button disabled={loading} text variant="error" onClick={close}>
            {$ll.cancel()}
        </Button>
        <Button {disabled} {loading} variant="success" onClick={editPost}>
            {$ll.save()}
        </Button>
    </div>
</Dialog>
