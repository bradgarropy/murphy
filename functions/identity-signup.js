const fetch = require("node-fetch")
const {USER_MUTATION} = require("./graphql/mutations")

const handler = async (event, context) => {
    console.log(event)
    console.log(context)
    const {user} = JSON.parse(event.body)
    console.log(user)

    const variables = {
        id: user.id,
        email: user.email,
    }
    console.log(variables)

    const response = await fetch("/api/fauna", {
        method: "POST",
        body: JSON.stringify({
            query: USER_MUTATION,
            variables,
        }),
    })

    // TODO: handle fetch error
    const data = await response.json()
    console.log(data)

    const body = {
        app_metadata: {
            roles: ["free"],
        },
    }

    return {
        statusCode: 200,
        body: JSON.stringify(body),
    }
}

module.exports = {handler}
