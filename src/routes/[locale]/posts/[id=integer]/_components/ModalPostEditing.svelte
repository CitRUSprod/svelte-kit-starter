<script lang="ts">
    import { Button, TextField, TextArea, Modal } from "$lib/components"

    import { t } from "$lib/locales"
    import { posts } from "$lib/stores"

    interface Data {
        id: number
        title: string
        content: string
    }

    let visible = false

    let id = 0
    let title = ""
    let content = ""

    $: trimmedTitle = title.trim()
    $: trimmedContent = content.trim()

    $: disabled = !(trimmedTitle && trimmedContent)

    export function open(data: Data) {
        id = data.id
        title = data.title
        content = data.content

        visible = true
    }

    function editPost() {
        if (!disabled) {
            posts.edit(id, trimmedTitle, trimmedContent)
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
    <div class="flex justify-center">
        <Button type="success" {disabled} on:click={editPost}>
            {$t("components.modal-post-editing.save")}
        </Button>
    </div>
</Modal>
