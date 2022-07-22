<script lang="ts">
    import { Button, Modal } from "$lib/components"

    import { t } from "$lib/locales"
    import { posts } from "$lib/stores"

    import type { Post } from "$lib/types"

    export let post: Readonly<Post>

    let visible = false

    export function open() {
        visible = true
    }

    export function close() {
        visible = false
    }

    function removePost() {
        posts.remove(post.id)
    }
</script>

<Modal class="flex flex-col gap-4 w-100" bind:visible>
    <div>
        <h1>{$t("components.modal-post-removing.post-removing")}</h1>
    </div>
    <div>
        <p>{$t("components.modal-post-removing.post-removing-question")}</p>
    </div>
    <div class="flex justify-between">
        <Button type="success" text on:click={close}>
            {$t("components.modal-post-removing.cancel")}
        </Button>
        <Button type="error" on:click={removePost}>
            {$t("components.modal-post-removing.remove")}
        </Button>
    </div>
</Modal>
