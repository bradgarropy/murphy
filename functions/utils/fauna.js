const faunadb = require("faunadb")

const q = faunadb.query
const client = new faunadb.Client({secret: process.env.FAUNADB_SERVER_SECRET})

const createUser = async user => {
    const params = {
        data: user,
    }

    const query = q.Create(q.Collection("Users"), params)

    const response = await client.query(query)
    return response
}

const readUserByEmail = async email => {
    console.log("readUserByEmail")
    console.log(email)

    const query = q.Get(q.Match(q.Index("usersByEmail"), email))

    const response = await client.query(query)
    console.log(response)
    return response
}

const createWorkout = async (user, body) => {
    console.log("createWorkout")

    // TODO: validate workout

    const response = await client.query(query)
    return response
}

const readWorkout = async user => {
    console.log("readWorkout")

    const response = await client.query(query)
    return response
}

const readWorkouts = async user => {
    console.log("readWorkouts")

    const response = await client.query(query)
    return response
}

module.exports = {createUser, readUserByEmail, createWorkout, readWorkout}
