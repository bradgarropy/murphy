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
