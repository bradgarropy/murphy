const fauna = require("./utils/fauna")

const handler = async (event, context) => {
    const method = event.httpMethod
    const {user} = context.clientContext

    let data

    switch (method) {
        case "GET":
            data = await fauna.readWorkout(user)
            break

        case "POST":
            data = await fauna.createWorkout(user)
            break
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify(data),
    }

    return response
}

module.exports = {handler}
