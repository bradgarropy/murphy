const {readWorkoutsByEmail} = require("./utils/workout")

const handler = async (event, context) => {
    const {user} = context.clientContext

    const data = await readWorkoutsByEmail(user.email)

    const response = {
        statusCode: 200,
        body: JSON.stringify(data),
    }

    return response
}

module.exports = {handler}
