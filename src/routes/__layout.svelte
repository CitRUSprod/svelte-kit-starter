<script lang="ts">
    import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "sveltestrap"

    const pages = [1, 2, 3, 4]
</script>

<Navbar color="primary" dark>
    <NavbarBrand>SvelteKit Template</NavbarBrand>
    <Nav>
        {#each pages as page}
            <NavItem>
                <NavLink class="text-white" href="{`/page/${page}`}">Page {page}</NavLink>
            </NavItem>
        {/each}
    </Nav>
</Navbar>
<main>
    <slot />
</main>

<style lang="scss">
    $measure: 4px;

    :global(body, #svelte) {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    :global(:root) {
        height: 100%;
    }

    main {
        flex-grow: 1;
        padding: $measure * 5;
    }
</style>
