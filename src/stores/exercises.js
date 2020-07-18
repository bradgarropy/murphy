import {derived} from "svelte/store"

import {runs, rounds} from "./config.js"

const constructExercises = (runs, rounds) => {
    const exercises = []

    if (runs) {
        exercises.push({
            name: "run",
            startTime: null,
            endTime: null,
            time: null,
            round: null,
        })
    }

    for (let index = 0; index < rounds; index++) {
        exercises.push({
            name: "push ups",
            startTime: null,
            endTime: null,
            time: null,
            round: index + 1,
        })

        exercises.push({
            name: "pull ups",
            startTime: null,
            endTime: null,
            time: null,
            round: index + 1,
        })

        exercises.push({
            name: "squats",
            startTime: null,
            endTime: null,
            time: null,
            round: index + 1,
        })
    }

    if (runs) {
        exercises.push({
            name: "run",
            startTime: null,
            endTime: null,
            time: null,
            round: null,
        })
    }

    return exercises
}

const exercises = derived([runs, rounds], ([$runs, $rounds]) =>
    constructExercises($runs, $rounds),
)

export {exercises}
