import { PersistedState } from "runed"

import type { Post } from "$lib/types"

const postsState = new PersistedState<Array<Post>>("posts", [])

function add(title: string, content: string) {
    const post: Post = {
        id: Date.now(),
        title: title.trim(),
        content: content.trim()
    }
    postsState.current.push(post)
}

function edit(id: number, title: string, content: string) {
    const post = postsState.current.find(p => p.id === id)

    if (post) {
        post.title = title
        post.content = content
    }
}

function remove(id: number) {
    const index = postsState.current.findIndex(p => p.id === id)

    if (index >= 0) {
        postsState.current.splice(index, 1)
    }
}

export const posts = {
    get list() {
        return postsState.current as ReadonlyArray<Readonly<Post>>
    },
    add,
    edit,
    remove
}
