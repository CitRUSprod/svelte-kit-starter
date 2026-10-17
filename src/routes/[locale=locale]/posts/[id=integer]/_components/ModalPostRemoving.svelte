<script lang="ts">
    import { ll } from "$i18n/helpers"
    import * as api from "$lib/api"
    import { Button, Modal } from "$lib/components"
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
        <h1>{$ll.postRemoving()}</h1>
    </div>
    <div>
        <p>{$ll.postRemovingConfirmation()}</p>
    </div>
    <div class="u:flex u:justify-between">
        <Button disabled={loading} text type="success" onclick={close}>
            {$ll.cancel()}
        </Button>
        <Button {loading} type="error" onclick={removePost}>
            {$ll.remove()}
        </Button>
    </div>
</Modal>
