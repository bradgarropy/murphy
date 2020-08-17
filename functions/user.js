const fauna = require("./utils/fauna")

const handler = async (event, context) => {
    const method = event.httpMethod

    switch (method) {
        case "GET":
            fauna.readUser()
            break

        case "POST":
            fauna.createUser()
            break
    }

    const response = {
        statusCode: 200,
        body: "user",
    }

    return response
}

module.exports = {handler}
