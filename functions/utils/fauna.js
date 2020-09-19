const faunadb = require("faunadb")

const q = faunadb.query
const client = new faunadb.Client({secret: process.env.FAUNADB_SERVER_SECRET})

module.exports = {
    q,
    client,
}
