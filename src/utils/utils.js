const getRoundLabel = round => {
    const {number, exercises} = round

    if (exercises.length === 1) {
        return exercises[0].name
    }

    return `Round ${number}`
}

export {getRoundLabel}
