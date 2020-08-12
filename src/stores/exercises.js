import {derived} from "svelte/store"
import {runs, rounds} from "./settings.js"

const createExercise = (name, round = null) => {
    const exercise = {
        name,
        round,
    }

    return exercise
}

const createRound = number => {
    const exercises = ["pull ups", "push ups", "squats"]
    const round = exercises.map(exercise => createExercise(exercise, number))

    return round
}

const createExercises = (runs, rounds) => {
    const exercises = []

    if (runs) {
        exercises.push(createExercise("1 mile run"))
    }

    for (let index = 1; index <= rounds; index++) {
        createRound(index).forEach(exercise => exercises.push(exercise))
    }

    if (runs) {
        exercises.push(createExercise("1 mile run"))
    }

    return exercises
}

const exercises = derived([runs, rounds], ([$runs, $rounds]) => {
    return createExercises($runs, $rounds)
})

export {exercises}
