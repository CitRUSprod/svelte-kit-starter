import { derived } from "svelte/store"
import { persisted } from "svelte-local-storage-store"

import type { Post } from "$lib/types"

type Posts = Array<Readonly<Post>>

const writablePosts = persisted<Array<Post>>("posts", [])
const { subscribe } = derived(writablePosts, posts => posts as Readonly<Posts>)

const { update } = writablePosts

function add(title: string, content: string) {
    update(posts => {
        const post: Post = {
            id: Date.now(),
            title: title.trim(),
            content: content.trim()
        }
        posts.push(post)

        return posts
    })
}

function edit(id: number, title: string, content: string) {
    update(posts => {
        const post = posts.find(p => p.id === id)

        if (post) {
            post.title = title
            post.content = content
        }

        return posts
    })
}

function remove(id: number) {
    update(posts => {
        const index = posts.findIndex(p => p.id === id)
        if (index >= 0) posts.splice(index, 1)
        return posts
    })
}

export const posts = { subscribe, add, edit, remove }
