const {createWorkout} = require("./utils/workouts")

const handler = async (event, context) => {
    const body = JSON.parse(event.body)
    const {user} = context.clientContext

    const data = await createWorkout(user, body)

    const response = {
        statusCode: 200,
        body: JSON.stringify(data),
    }

    return response
}

module.exports = {handler}
