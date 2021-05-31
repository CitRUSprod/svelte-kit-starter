<script lang="ts">
    import FaIcon from "svelte-fa"

    import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
    import { theme } from "$lib/stores"

    const { dark } = theme
    const pages = [1, 2, 3, 4]
</script>

<div class="bg-neutral shadow-lg text-neutral-content mb-2 navbar">
    <div class="flex-none mx-2 px-2">
        <a class="font-bold text-lg" href="/">SvelteKit Template</a>
    </div>
    <div class="flex-1 justify-end mx-2 px-2">
        {#each pages as page}
            <a class="rounded-btn btn btn-ghost btn-sm" href="{`/page/${page}`}">
                Page {page}
            </a>
        {/each}
        <button class="rounded-btn btn btn-ghost btn-sm" on:click="{theme.toggle}">
            <FaIcon icon="{$dark ? faMoon : faSun}" />
        </button>
    </div>
</div>
