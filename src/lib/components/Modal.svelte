<script lang="ts">
    import { Dialog, Transition, TransitionChild } from "@rgossiaux/svelte-headlessui"

    import classNames from "classnames"

    export let visible = false
    export let persistent = false

    let klass: string | undefined = undefined
    export { klass as class }

    function close() {
        if (!persistent) {
            visible = false
        }
    }
</script>

<Transition show={visible} appear>
    <Dialog on:close={close}>
        <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
        >
            <div
                class="fixed inset-0 flex justify-center items-center p-4 bg-black bg-opacity-30"
                on:click={close}
            >
                <div
                    class={classNames("p-8 bg-content shadow-md rounded-md", klass)}
                    on:click|stopPropagation
                >
                    <slot />
                </div>
            </div>
        </TransitionChild>
    </Dialog>
</Transition>
