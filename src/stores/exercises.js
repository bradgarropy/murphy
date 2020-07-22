import {derived} from "svelte/store"

import {runs, rounds} from "./config.js"

const createExercise = (name, round = null) => {
    const exercise = {
        name,
        startTime: null,
        endTime: null,
        time: null,
        round,
    }

    return exercise
}

const createRound = number => {
    const exercises = ["push ups", "pull ups", "squats"]
    const round = exercises.map(exercise => createExercise(exercise, number))

    return round
}

const createExercises = (runs, rounds) => {
    const exercises = []

    if (runs) {
        exercises.push(createExercise("1 mile run"))
    }

    for (let index = 0; index < rounds; index++) {
        createRound(index + 1).forEach(exercise => exercises.push(exercise))
    }

    if (runs) {
        exercises.push(createExercise("1 mile run"))
    }

    return exercises
}

const exercises = derived(
    [runs, rounds],
    ([$runs, $rounds]) => createExercises($runs, $rounds),
    [],
)

export {exercises}
