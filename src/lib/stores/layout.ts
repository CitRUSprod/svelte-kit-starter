import { writable } from "svelte/store"

type Layout = "default" | "simple"

const defaultValue = "default"

const { subscribe, set } = writable<Layout>(defaultValue)

let layoutCandidate: Layout = defaultValue

function select(layout: Layout) {
    layoutCandidate = layout
}

function apply() {
    set(layoutCandidate)
    layoutCandidate = defaultValue
}

export const layout = { subscribe, select, apply }
