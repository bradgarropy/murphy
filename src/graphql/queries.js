const WORKOUTS_QUERY = `
    query allWorkouts {
        allWorkouts {
            data {
                _ts
                email
                exercises
            }
        }
    }
`

const WORKOUT_QUERY = `
    query findWorkoutById($id: ID!) {
        findWorkoutByID(id: $id) {
            _ts
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
                _ts
                email
                exercises
            }
        }
    }
`

export {WORKOUTS_QUERY, WORKOUT_QUERY, USER_WORKOUTS_QUERY}
