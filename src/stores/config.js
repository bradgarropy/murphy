import {writable} from "svelte/store"

const runs = writable(true)
const rounds = writable(20)

export {runs, rounds}
