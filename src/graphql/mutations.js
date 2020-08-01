const WORKOUT_MUTATION = `
    mutation createWorkout($data: WorkoutInput!) {
        createWorkout(data: $data) {
            user
            exercises
        }
    }
`

export {WORKOUT_MUTATION}
