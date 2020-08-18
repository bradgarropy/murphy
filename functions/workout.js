const fauna = require("./utils/fauna")

const handler = async (event, context) => {
    console.log(event)
    console.log(context)

    const method = event.httpMethod
    const {user} = context.clientContext

    let data

    switch (method) {
        case "GET":
            data = await fauna.readWorkoutsByEmail(user.email)
            break

        case "POST": {
            const body = JSON.parse(event.body)
            data = await fauna.createWorkout(user, body)
            break
        }
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify(data),
    }

    return response
}

module.exports = {handler}
