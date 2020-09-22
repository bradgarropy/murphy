const handler = async () => {
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
