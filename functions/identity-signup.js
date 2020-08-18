const {createUser} = require("./utils/fauna")

const handler = async event => {
    const {user} = JSON.parse(event.body)

    const data = {
        id: user.id,
        email: user.email,
    }

    await createUser(data)

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
