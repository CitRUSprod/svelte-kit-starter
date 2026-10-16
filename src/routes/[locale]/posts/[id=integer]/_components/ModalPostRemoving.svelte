<script lang="ts">
    import * as api from "$lib/api"
    import { Button, Modal } from "$lib/components"
    import { t } from "$lib/locales"
    import type { Post } from "$lib/types"

    interface Props {
        post: Readonly<Post>
    }

    const { post }: Props = $props()

    let visible = $state(false)
    let loading = $state(false)

    export function open() {
        visible = true
    }

    export function close() {
        visible = false
    }

    async function removePost() {
        loading = true
        await api.posts.removePost({
            id: post.id
        })
        loading = false
        close()
    }
</script>

<Modal class="u:flex u:flex-col u:gap-4 u:w-100" persistent={loading} bind:visible>
    <div>
        <h1>{$t("components.modal-post-removing.post-removing")}</h1>
    </div>
    <div>
        <p>{$t("components.modal-post-removing.post-removing-question")}</p>
    </div>
    <div class="u:flex u:justify-between">
        <Button disabled={loading} text type="success" onclick={close}>
            {$t("components.modal-post-removing.cancel")}
        </Button>
        <Button {loading} type="error" onclick={removePost}>
            {$t("components.modal-post-removing.remove")}
        </Button>
    </div>
</Modal>
