import {writable, get} from "svelte/store"
import {runs, rounds} from "./settings.js"

const createExercise = (name, round) => {
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

    exercises[0].startTime = 0

    return exercises
}

const exercises = writable(createExercises(get(runs), get(rounds)))

runs.subscribe(value =>
    exercises.update(() => createExercises(value, get(rounds))),
)

rounds.subscribe(value =>
    exercises.update(() => createExercises(get(runs), value)),
)

export {exercises}
