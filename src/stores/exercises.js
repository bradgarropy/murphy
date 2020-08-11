import {derived} from "svelte/store"
import {runs, rounds} from "./settings.js"

const createExercise = (name, round) => {
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
    const base = runs ? 1 : 0

    if (runs) {
        exercises.push(createExercise("1 mile run", base))
    }

    for (let index = 1; index <= rounds; index++) {
        createRound(index + base).forEach(exercise => exercises.push(exercise))
    }

    if (runs) {
        exercises.push(createExercise("1 mile run", rounds + base * 2))
    }

    return exercises
}

const exercises = derived([runs, rounds], ([$runs, $rounds]) =>
    createExercises($runs, $rounds),)

export {exercises}
