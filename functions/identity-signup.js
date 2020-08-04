const handler = () => {
    const response = {
        statusCode: 200,
        body: {
            app_metadata: {
                roles: ["free"],
            },
        },
    }

    return response
}

module.exports = {handler}
