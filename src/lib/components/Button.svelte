<script lang="ts">
    import { createEventDispatcher } from "svelte"

    type Color = "default" | "primary" | "secondary" | "success" | "error" | "warning" | "info"

    export let color: Color = "default"
    export let href: string | undefined = undefined
    export let outlined = false
    export let disabled = false
    export let loading = false

    let klass = ""
    export { klass as class }

    function getColorClass(currentColor: Color, ...classNames: Array<`btn-${Color}`>) {
        const className = classNames.find(name => `btn-${currentColor}` === name)
        return className ?? ""
    }

    const dispatch = createEventDispatcher()

    function onClick() {
        if (!disabled && !loading) {
            dispatch("click")
        }
    }
</script>

<button
    class="btn {getColorClass(
        color,
        'btn-primary',
        'btn-secondary',
        'btn-success',
        'btn-error',
        'btn-warning',
        'btn-info'
    )} {outlined ? 'btn-outline' : ''} {loading ? 'loading' : ''} relative {klass}"
    disabled="{disabled}"
    on:click="{onClick}"
>
    <slot />
    {#if href !== undefined}
        <a class="h-full w-full top-0 left-0 block absolute" href="{href}"> </a>
    {/if}
</button>
