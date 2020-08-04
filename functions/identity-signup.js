const handler = () => {
    console.log("identity-signup")

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            app_metadata: {
                roles: ["free"],
            },
        }),
    }

    return response
}

module.exports = {handler}
