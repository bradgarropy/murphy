const faunadb = require("faunadb")

const q = faunadb.query
const client = new faunadb.Client({secret: process.env.FAUNADB_SERVER_SECRET})

const createUser = () => {
    console.log("createUser")
}

const readUser = () => {
    console.log("readUser")
}

const createWorkout = () => {
    console.log("createWorkout")
}

const readWorkout = () => {
    console.log("readWorkout")
}

module.exports = {createUser, readUser, createWorkout, readWorkout}
