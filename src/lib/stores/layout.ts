import { writable } from "svelte/store"

type Layout = "default" | "simple"

const { subscribe, set } = writable<Layout>("default")

let layoutCandidate: Layout = "default"

function select(layout: Layout) {
    layoutCandidate = layout
}

function apply() {
    set(layoutCandidate)
    layoutCandidate = "default"
}

export const layout = { subscribe, select, apply }
