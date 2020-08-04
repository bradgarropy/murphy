const handler = async () => {
    console.log("signup")

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            app_metadata: {
                roles: ["free"],
            },
        }),
    }

    console.log(response)

    return response
}

module.exports = {handler}
