<script lang="ts">
    import SvelteSeo from "svelte-seo"

    import { DialogPostEditing, DialogPostRemoving } from "./_components"

    import { browser } from "$app/environment"
    import { goto } from "$app/navigation"
    import { ll, localePath } from "$i18n/helpers"
    import { ContentDefault, Button } from "$lib/components"
    import { posts } from "$lib/stores"

    interface Props {
        data: { id: number }
    }

    const { data }: Props = $props()

    const post = $derived(posts.list.find(p => p.id === data.id))

    $effect(() => {
        if (browser && !post) goto($localePath("/posts"))
    })

    let dialogPostEditing = $state<DialogPostEditing>()
    let dialogPostRemoving = $state<DialogPostRemoving>()
</script>

<SvelteSeo title={$ll.posts()} />

{#if browser && post}
    <ContentDefault title={post.title}>
        <div class="u:flex u:flex-col u:gap-4">
            {#each post.content.split(/\n+/) as paragraph, index (index)}
                <p>{paragraph}</p>
            {/each}
        </div>
        <div>
            <Button variant="warning" onClick={() => dialogPostEditing?.open()}>
                {$ll.edit()}
            </Button>
            <Button variant="error" onClick={() => dialogPostRemoving?.open()}>
                {$ll.remove()}
            </Button>
        </div>
    </ContentDefault>

    <DialogPostEditing bind:this={dialogPostEditing} {post} />
    <DialogPostRemoving bind:this={dialogPostRemoving} {post} />
{/if}
