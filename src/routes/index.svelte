<script lang="ts">
    let count = 0
</script>

<div class="container">
    <div class="card">
        <h1>SvelteKit Template</h1>
        <div class="text-center">
            <button on:click="{() => count++}">
                Clicked: {count}
            </button>
        </div>
    </div>
</div>

<style lang="scss">
    $green: #0e860e;
    $gray: #aaa;
    $white: #fff;
    $measure: 4px;

    button {
        padding: $measure * 3;
        background-color: $gray;
        color: $white;
        border: 0;
        border-radius: $measure * 2;
        font-size: $measure * 4;
        font-weight: bold;
        outline: none;
        user-select: none;
        cursor: pointer;

        &:hover {
            background-color: lighten($gray, 5);
        }

        &:active {
            background-color: darken($gray, 5);
        }
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .card {
        padding: $measure * 5;
        border: 1px solid $green;
        border-radius: $measure * 2;
        color: $green;
    }

    .text-center {
        text-align: center;
    }
</style>
