import {get, writable} from "svelte/store"

let id
let wakeLock = undefined
let previouslyElapsed = 0

const elapsed = writable(0)
const active = writable(false)
const ticking = writable(false)
const counting = writable(false)
const laps = writable([{startTime: 0, endTime: null, time: null}])

const start = () => {
    if (get(elapsed)) {
        startTimer()
    } else {
        startCountdown()
    }
}

const startCountdown = () => {
    counting.set(true)
}

const startTimer = async () => {
    active.set(true)
    ticking.set(true)
    const startTime = Date.now()

    if ("wakeLock" in navigator) {
        wakeLock = await navigator.wakeLock.request("screen")
    }

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

const stop = async () => {
    ticking.set(false)
    previouslyElapsed = get(elapsed)

    clearInterval(id)

    wakeLock = await wakeLock.release()
}

const resetTimer = () => {
    elapsed.set(0)
    active.set(false)
    ticking.set(false)
    laps.set([{startTime: 0, endTime: null, time: null}])

    previouslyElapsed = 0

    clearInterval(id)
}

export {
    active,
    counting,
    elapsed,
    lap,
    laps,
    resetTimer,
    start,
    startCountdown,
    startTimer,
    stop,
    ticking,
}
