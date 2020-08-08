const WORKOUT_MUTATION = `
    mutation createWorkout($data: WorkoutInput!) {
        createWorkout(data: $data) {
            email
            exercises
        }
    }
`

export {WORKOUT_MUTATION}
