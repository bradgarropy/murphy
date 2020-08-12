const fetch = require("node-fetch")
const graphql = require("./utils/graphql")
const {USER_QUERY} = require("./graphql/queries")

const handler = async (event, context) => {
    const body = JSON.parse(event.body)
    const email = body.data.object.customer_email

    if (body.type !== "checkout.session.completed") {
        return {statusCode: 200}
    }

    const {data} = await graphql({
        query: USER_QUERY,
        variables: {email},
    })

    const {id} = data.getUserByEmail
    const {url, token} = context.clientContext.identity

    const updates = {
        app_metadata: {
            roles: ["free", "pro"],
        },
    }

    await fetch(`${url}/admin/users/${id}`, {
        method: "PUT",
        headers: {Authorization: `Bearer ${token}`},
        body: JSON.stringify(updates),
    })

    const response = {
        statusCode: 200,
        body: "pro",
    }

    return response
}

module.exports = {handler}
