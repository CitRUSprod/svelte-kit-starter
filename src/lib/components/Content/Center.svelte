<script lang="ts">
    import classNames from "classnames"
    import type { Snippet } from "svelte"

    interface Props {
        class?: string
        children?: Snippet
    }

    const { class: klass = undefined, children }: Props = $props()
</script>

<div
    class={classNames("u:absolute u:flex u:justify-center u:items-center u:w-full u:h-full", klass)}
>
    {@render children?.()}
</div>
