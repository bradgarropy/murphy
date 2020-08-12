const USER_MUTATION = `
    mutation createUser($data: UserInput!) {
        createUser(data: $data) {
            netlifyID
            stripeID
        }
    }
`

const WORKOUT_MUTATION = `
    mutation createWorkout($data: WorkoutInput!) {
        createWorkout(data: $data) {
            date
            email
            exercises
        }
    }
`

export {USER_MUTATION, WORKOUT_MUTATION}
