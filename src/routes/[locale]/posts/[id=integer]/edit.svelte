<script lang="ts" context="module">
    import type { Load } from "@sveltejs/kit"

    export const load: Load = ({ params }) => ({
        props: {
            id: parseInt(params.id)
        }
    })
</script>

<script lang="ts">
    import { Content, Button, TextField, TextArea } from "$lib/components"

    import { browser } from "$app/env"
    import { goto } from "$app/navigation"
    import { t, localePath } from "$lib/locales"
    import { posts } from "$lib/stores"

    export let id: number

    let postTitle = ""
    let postContent = ""

    $: trimmedPostTitle = postTitle.trim()
    $: trimmedPostContent = postContent.trim()

    const post = $posts.find(p => p.id === id)

    if (browser) {
        if (post) {
            postTitle = post.title
            postContent = post.content
        } else {
            goto($localePath("/posts"))
        }
    }

    $: disabledEditing =
        !(trimmedPostTitle && trimmedPostContent) ||
        (!!post && post.title === trimmedPostTitle && post.content === trimmedPostContent)

    function editPost() {
        if (!disabledEditing) {
            posts.edit(id, trimmedPostTitle, trimmedPostContent)
            goto($localePath("/posts"))
        }
    }
</script>

<svelte:head>
    <title>{$t("posts.$id.editPage.postEditing")}</title>
</svelte:head>

<Content.Center>
    <div class="flex flex-col gap-4 w-150 border-primary rounded-lg border text-center p-8">
        <div>
            <h1>{$t("posts.$id.editPage.postEditing")}</h1>
        </div>
        <div>
            <TextField
                label={$t("posts.$id.editPage.title")}
                placeholder={$t("posts.$id.editPage.enterTitle")}
                bind:value={postTitle}
            />
        </div>
        <div>
            <TextArea
                class="resize-none"
                label={$t("posts.$id.editPage.content")}
                placeholder={$t("posts.$id.editPage.enterContent")}
                bind:value={postContent}
            />
        </div>
        <div class="flex justify-center">
            <Button type="success" disabled={disabledEditing} on:click={editPost}>
                {$t("posts.$id.editPage.save")}
            </Button>
        </div>
    </div>
</Content.Center>
