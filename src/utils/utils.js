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

    const pro = user.app_metadata.roles.includes("pro")
    return pro
}

export {getRoundLabel, isPro}
