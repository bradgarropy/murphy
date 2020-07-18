import {writable, get} from "svelte/store"

let id
let previouslyElapsed = 0

const elapsed = writable(0)
const running = writable(false)

const start = () => {
    running.set(true)
    const startTime = Date.now()

    id = setInterval(() => {
        elapsed.set(previouslyElapsed + Date.now() - startTime)
    }, 10)
}

const stop = () => {
    running.set(false)
    previouslyElapsed = get(elapsed)

    clearInterval(id)
}

const reset = () => {
    elapsed.set(0)
    running.set(false)
    previouslyElapsed = 0

    clearInterval(id)
}

export {running, elapsed, start, stop, reset}
