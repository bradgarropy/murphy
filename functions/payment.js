const fetch = require("node-fetch")

const handler = async (event, context) => {
    const {identity, user} = context.clientContext
    console.log(identity)
    console.log(user)

    const body = {
        app_metadata: {
            roles: [...user.app_metadata.roles, "pro"],
        },
    }

    const res = await fetch(`${identity.url}/admin/users/${user.sub}`, {
        method: "PUT",
        headers: {Authorization: `Bearer ${identity.token}`},
        body: JSON.stringify(body),
    })

    const data = await res.json()
    console.log(data)

    const response = {
        statusCode: 200,
        body: "payment",
    }

    return response
}

module.exports = {handler}
