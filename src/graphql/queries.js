const WORKOUTS_QUERY = `
    query allWorkouts {
        allWorkouts {
            data {
                id
                email
                exercises
            }
        }
    }
`

const USER_WORKOUTS_QUERY = `
    query findWorkoutsByUser($user: Int!) {
        findWorkoutsByUser(user: $user) {
            data {
                id
                email
                exercises
            }
        }
    }
`

export {WORKOUTS_QUERY, USER_WORKOUTS_QUERY}
