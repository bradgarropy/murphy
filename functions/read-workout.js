const {readWorkoutById} = require("./utils/workout")

const handler = async (event, context) => {
    const {user} = context.clientContext

    const re = new RegExp("/api/read-workout/(?<id>.*)", "g")
    const exec = re.exec(event.path)

    if (!exec) {
        const response = {
            statusCode: 400,
            body: "Bad Request",
        }

        return response
    }

    const data = await readWorkoutById(exec.groups.id)

    if (data.data.email !== user.email) {
        const response = {
            statusCode: 401,
            body: "Unauthorized",
        }

        return response
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify(data),
    }

    return response
}

module.exports = {handler}
