const WORKOUT_MUTATION = `
    mutation createWorkout($data: WorkoutInput!) {
        createWorkout(data: $data) {
            date
            email
            exercises
        }
    }
`

export {WORKOUT_MUTATION}
