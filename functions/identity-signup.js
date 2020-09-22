const handler = async (event, context) => {
    console.log(event)
    console.log(context)

    const body = {
        app_metadata: {
            roles: ["free"],
        },
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify(body),
    }

    return response
}

module.exports = {handler}
