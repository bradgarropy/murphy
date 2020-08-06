const getRoundLabel = (number, runs, rounds, exercises) => {
    if ((number === 1 || number === rounds + 2) && runs) {
        return exercises[0].name
    }

    return `Round ${number - 1}`
}

export {getRoundLabel}
