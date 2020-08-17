const fauna = require("./utils/fauna")

const handler = async (event, context) => {
    const method = event.httpMethod

    switch (method) {
        case "GET":
            fauna.readWorkout()
            break

        case "POST":
            fauna.createWorkout()
            break
    }

    const response = {
        statusCode: 200,
        body: "workout",
    }

    return response
}

module.exports = {handler}
