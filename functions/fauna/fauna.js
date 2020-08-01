const fetch = require("node-fetch")

exports.handler = async event => {
    const response = await fetch("https://graphql.fauna.com/graphql", {
        method: "POST",
        headers: {Authorization: `Bearer ${process.env.FAUNADB_SERVER_SECRET}`},
        body: event.body,
    })

    const data = await response.json()

    return {
        statusCode: 200,
        body: JSON.stringify(data),
    }
}

// import {WORKOUT_MUTATION} from "./graphql/mutations.js"
// import {WORKOUTS_QUERY, USER_WORKOUTS_QUERY} from "./graphql/queries.js"

// fetch("/api/fauna", {
//     method: "POST",
//     body: JSON.stringify({query: WORKOUTS_QUERY}),
// })
//     .then(r => r.json())
//     .then(data => console.log("data returned:", data))

// fetch("/api/fauna", {
//     method: "POST",
//     body: JSON.stringify({query: USER_WORKOUTS_QUERY, variables: {user: 3}}),
// })
//     .then(r => r.json())
//     .then(data => console.log("data returned:", data))
