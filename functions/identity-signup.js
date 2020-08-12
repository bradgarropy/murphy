const graphql = require("./utils/graphql")
const {USER_MUTATION} = require("./graphql/mutations")

const handler = async event => {
    const {user} = JSON.parse(event.body)

    const variables = {
        data: {
            id: user.id,
            email: user.email,
        },
    }

    graphql({query: USER_MUTATION, variables})

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
