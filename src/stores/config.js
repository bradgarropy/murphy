import {writable} from "svelte/store"

const config = writable({
    runs: true,
    rounds: 20,
})

export default config
