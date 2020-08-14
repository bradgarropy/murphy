const graphql = require("./utils/graphql")
const {USER_MUTATION} = require("./graphql/mutations")

const handler = async event => {
    console.log("identity-signup")
    const {user} = JSON.parse(event.body)
    console.log(user)

    const variables = {
        data: {
            id: user.id,
            email: user.email,
        },
    }

    const data = await graphql({query: USER_MUTATION, variables})
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
