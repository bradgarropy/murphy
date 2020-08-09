const WORKOUTS_QUERY = `
    query allWorkouts {
        allWorkouts {
            data {
                date
                email
                exercises
            }
        }
    }
`

const WORKOUT_QUERY = `
    query findWorkoutById($id: ID!) {
        findWorkoutByID(id: $id) {
            date
            email
            exercises
        }
    }
`

const USER_WORKOUTS_QUERY = `
    query findWorkoutsByEmail($email: String!) {
        findWorkoutsByEmail(email: $email) {
            data {
                _id
                date
                email
                exercises
            }
        }
    }
`

export {WORKOUTS_QUERY, WORKOUT_QUERY, USER_WORKOUTS_QUERY}
