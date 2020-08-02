const WORKOUT_MUTATION = `
    mutation createWorkout($data: WorkoutInput!) {
        createWorkout(data: $data) {
            id
            email
            exercises
        }
    }
`

export {WORKOUT_MUTATION}
