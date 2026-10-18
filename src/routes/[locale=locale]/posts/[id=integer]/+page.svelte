<script lang="ts">
    import { ModalPostEditing, ModalPostRemoving } from "./_components"

    import { browser } from "$app/environment"
    import { goto } from "$app/navigation"
    import { ll, localePath } from "$i18n/helpers"
    import { Content, Button } from "$lib/components"
    import { posts } from "$lib/stores"

    interface Props {
        data: { id: number }
    }

    const { data }: Props = $props()

    const post = $derived(posts.list.find(p => p.id === data.id))

    $effect(() => {
        if (browser && !post) goto($localePath("/posts"))
    })

    let modalPostEditing = $state<ModalPostEditing>()
    let modalPostRemoving = $state<ModalPostRemoving>()
</script>

<svelte:head>
    {#if browser && post}
        {#key post}
            <title>{post.title}</title>
        {/key}
    {/if}
</svelte:head>

{#if browser && post}
    <Content.Default title={post.title}>
        <div class="u:flex u:flex-col u:gap-4">
            {#each post.content.split(/\n+/) as paragraph, index (index)}
                <p>{paragraph}</p>
            {/each}
        </div>
        <div>
            <Button variant="warning" onClick={() => modalPostEditing?.open()}>
                {$ll.edit()}
            </Button>
            <Button variant="error" onClick={() => modalPostRemoving?.open()}>
                {$ll.remove()}
            </Button>
        </div>
    </Content.Default>

    <ModalPostEditing bind:this={modalPostEditing} {post} />
    <ModalPostRemoving bind:this={modalPostRemoving} {post} />
{/if}
