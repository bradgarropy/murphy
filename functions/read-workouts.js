const fauna = require("./utils/fauna")

const handler = async (event, context) => {
    const {user} = context.clientContext

    const data = await fauna.readWorkoutsByEmail(user.email)

    const response = {
        statusCode: 200,
        body: JSON.stringify(data),
    }

    return response
}

module.exports = {handler}
