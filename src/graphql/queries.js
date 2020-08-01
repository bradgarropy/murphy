const WORKOUTS_QUERY = `
    query allWorkouts {
        allWorkouts {
            data {
                user
                exercises
            }
        }
    }
`

const USER_WORKOUTS_QUERY = `
    query findWorkoutsByUser($user: Int!) {
        findWorkoutsByUser(user: $user) {
            data {
                user
                exercises
            }
        }
    }
`

export {WORKOUTS_QUERY, USER_WORKOUTS_QUERY}
