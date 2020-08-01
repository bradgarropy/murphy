import {derived} from "svelte/store"

import {laps} from "./timer.js"
import {exercises} from "./exercises.js"

const workout = derived([laps, exercises], ([$laps, $exercises]) =>
    $exercises.map((exercise, index) => ({
        ...exercise,
        ...$laps[index],
    })),
)

export {workout}
