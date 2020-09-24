const getExerciseLabel = exercise => {
    switch (exercise) {
        case "pull ups":
            return `5 ${exercise}`

        case "push ups":
            return `10 ${exercise}`

        case "squats":
            return `15 ${exercise}`

        default:
            return exercise
    }
}

const getRoundLabel = round => {
    const {number, exercises} = round

    if (exercises.length === 1) {
        return exercises[0].name
    }

    return `Round ${number}`
}

const isPro = user => {
    if (!user) {
        return false
    }

    const pro = user?.app_metadata?.roles?.includes("pro")
    return pro
}

export {getExerciseLabel, getRoundLabel, isPro}
