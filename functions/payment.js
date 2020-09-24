const fetch = require("node-fetch")

const {validate} = require("./utils/stripe")

const handler = async (event, context) => {
    const body = JSON.parse(event.body)
    const email = body.data.object.customer_email
    const {url, token} = context.clientContext.identity

    // validate stripe webhook
    const status = validate(event)

    if (!status.isValid) {
        return {
            statusCode: 400,
            body: `Webhook Error: ${status.error}`,
        }
    }

    // only handle checkout completed events
    if (body.type !== "checkout.session.completed") {
        return {statusCode: 200}
    }

    const readUsersResponse = await fetch(
        `${url}/admin/users?filter=${email}`,
        {
            method: "GET",
            headers: {Authorization: `Bearer ${token}`},
        },
    )

    // TODO: handle fetch error
    const {users} = await readUsersResponse.json()

    const updateUserBody = {
        app_metadata: {
            roles: ["free", "pro"],
        },
    }

    // update user roles
    const updateUserResponse = await fetch(
        `${url}/admin/users/${users[0].id}`,
        {
            method: "PUT",
            headers: {Authorization: `Bearer ${token}`},
            body: JSON.stringify(updateUserBody),
        },
    )

    // TODO: handle fetch error
    await updateUserResponse.json()

    const response = {statusCode: 200}
    return response
}

module.exports = {handler}
