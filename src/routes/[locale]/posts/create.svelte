<script lang="ts">
    import { Content, Button, TextField, TextArea } from "$lib/components"

    import { goto } from "$app/navigation"
    import { t, localePath } from "$lib/locales"
    import { posts } from "$lib/stores"

    let postTitle = ""
    let postContent = ""

    $: trimmedPostTitle = postTitle.trim()
    $: trimmedPostContent = postContent.trim()

    $: disabledCreating = !(trimmedPostTitle && trimmedPostContent)

    function createPost() {
        if (!disabledCreating) {
            posts.add(trimmedPostTitle, trimmedPostContent)
            goto($localePath("/posts"))
        }
    }
</script>

<svelte:head>
    <title>{$t("posts.create.postCreating")}</title>
</svelte:head>

<Content.Center>
    <div class="flex flex-col gap-4 w-150 border-primary rounded-lg border text-center p-8">
        <div>
            <h1>{$t("posts.create.postCreating")}</h1>
        </div>
        <div>
            <TextField
                label={$t("posts.create.title")}
                placeholder={$t("posts.create.enterTitle")}
                bind:value={postTitle}
            />
        </div>
        <div>
            <TextArea
                class="resize-none"
                label={$t("posts.create.content")}
                placeholder={$t("posts.create.enterContent")}
                bind:value={postContent}
            />
        </div>
        <div class="flex justify-center">
            <Button type="success" disabled={disabledCreating} on:click={createPost}>
                {$t("posts.create.create")}
            </Button>
        </div>
    </div>
</Content.Center>
