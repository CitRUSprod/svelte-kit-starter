<script lang="ts">
    import classNames from "classnames"
    import type { Snippet } from "svelte"

    interface Props {
        title: string
        class?: string
        children?: Snippet
    }

    const { title, class: klass = undefined, children }: Props = $props()
</script>

<div class="u:container u:mx-auto u:p-4">
    <div>
        <h1>{title}</h1>
    </div>
    <div class={classNames("u:grid u:gap-4 u:my-4", klass)}>
        {@render children?.()}
    </div>
</div>
