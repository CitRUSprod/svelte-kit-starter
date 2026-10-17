<script lang="ts">
    import { ModalPostCreating } from "./_components"

    import { ll, localePath } from "$i18n/helpers"
    import { Content, Button } from "$lib/components"
    import { posts } from "$lib/stores"

    let modalPostCreating: ModalPostCreating
</script>

<svelte:head>
    <title>{$ll.posts()}</title>
</svelte:head>

<Content.Default title={$ll.posts()}>
    <div>
        <Button variant="success" onclick={modalPostCreating.open}>
            {$ll.createPost()}
        </Button>
    </div>
    <div class="u:grid u:grid-cols-3 u:gap-4">
        {#each posts.list as post (post.id)}
            <a
                class="u:p-4 u:border-primary u:rounded-lg u:border u:transition u:hover:bg-primary u:hover:bg-opacity-20 u:dark:hover:bg-opacity-20"
                href={$localePath(`/posts/${String(post.id)}`)}
            >
                <div>
                    <h3>{post.title}</h3>
                </div>
                <div>
                    <p class="u:truncate">{post.content}</p>
                </div>
            </a>
        {/each}
    </div>
</Content.Default>

<ModalPostCreating bind:this={modalPostCreating} />
