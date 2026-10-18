<script lang="ts">
    import type { Snippet } from "svelte"

    import type { ComponentBasicProps } from "$lib/types"

    type Props = ComponentBasicProps & {
        title: string
        children?: Snippet
    }

    const { title, class: klass = undefined, children, ...rest }: Props = $props()
</script>

<div class="u:container u:mx-auto u:p-4" {...rest}>
    <div>
        <h1>{title}</h1>
    </div>
    <div class={["u:grid u:gap-4 u:my-4", klass]}>
        {@render children?.()}
    </div>
</div>
