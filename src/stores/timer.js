import {writable, get} from "svelte/store"

let id
let previouslyElapsed = 0

const elapsed = writable(0)
const running = writable(false)
const laps = writable([{startTime: 0, endTime: null, time: null}])

const start = () => {
    running.set(true)
    const startTime = Date.now()

    id = setInterval(() => {
        elapsed.set(previouslyElapsed + Date.now() - startTime)
    }, 10)
}

const lap = () => {
    const newLaps = get(laps)
    const elapsedTime = get(elapsed)
    const index = newLaps.length - 1

    newLaps[index].endTime = elapsedTime
    newLaps[index].time = newLaps[index].endTime - newLaps[index].startTime

    newLaps.push({
        startTime: elapsedTime,
        endTime: null,
        time: null,
    })

    laps.set(newLaps)
}

const stop = () => {
    running.set(false)
    previouslyElapsed = get(elapsed)

    clearInterval(id)
}

const resetTimer = () => {
    elapsed.set(0)
    running.set(false)
    laps.set([{startTime: 0, endTime: null, time: null}])

    previouslyElapsed = 0

    clearInterval(id)
}

export {running, elapsed, laps, start, lap, stop, resetTimer}
