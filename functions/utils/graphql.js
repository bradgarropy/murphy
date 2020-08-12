const fetch = require("node-fetch")

const graphql = async ({query, variables}) => {
    const response = await fetch("https://graphql.fauna.com/graphql", {
        method: "POST",
        headers: {Authorization: `Bearer ${process.env.FAUNADB_SERVER_SECRET}`},
        body: JSON.stringify({query, variables}),
    })

    const data = await response.json()
    return data
}

module.exports = graphql
