const faunadb = require("faunadb")

const q = faunadb.query
const client = new faunadb.Client({secret: process.env.FAUNADB_SERVER_SECRET})

const createWorkout = async (user, body) => {
    // TODO: validate workout

    const params = {
        data: {
            ...body,
            email: user.email,
        },
    }

    const query = q.Create(q.Collection("Workouts"), params)

    const response = await client.query(query)
    return response
}

const readWorkoutsByEmail = async email => {
    const query = q.Map(
        q.Paginate(q.Match(q.Index("workoutsByEmail"), email)),
        q.Lambda("ref", q.Get(q.Var("ref"))),
    )

    const response = await client.query(query)
    return response
}

const readWorkoutById = async id => {
    const query = q.Get(q.Ref(q.Collection("Workouts"), id))
    const response = await client.query(query)
    return response
}

module.exports = {
    createWorkout,
    readWorkoutsByEmail,
    readWorkoutById,
}
