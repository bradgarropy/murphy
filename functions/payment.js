const fetch = require("node-fetch")

const stripe = require("./utils/stripe")

const handler = async (event, context) => {
    const body = JSON.parse(event.body)
    const email = body.data.object.customer_email
    const {url, token} = context.clientContext.identity

    try {
        // validate stripe webook
        stripe.webhooks.constructEvent(
            event.body,
            event.headers["stripe-signature"],
            process.env.STRIPE_WEBHOOK_SECRET,
        )
    } catch (err) {
        return {
            statusCode: 400,
            body: `Webhook Error: ${err.message}`,
        }
    }

    // only handle checkout completed events
    if (body.type !== "checkout.session.completed") {
        return {statusCode: 200}
    }

    const readUsersResponse = await fetch(`${url}/admin/users`, {
        method: "GET",
        headers: {Authorization: `Bearer ${token}`},
    })

    // TODO: handle fetch error
    const {users} = await readUsersResponse.json()

    // find user
    const user = users.find(user => user.email === email)

    const updateUserBody = {
        app_metadata: {
            roles: ["free", "pro"],
        },
    }

    // update user roles
    const updateUserResponse = await fetch(`${url}/admin/users/${user.id}`, {
        method: "PUT",
        headers: {Authorization: `Bearer ${token}`},
        body: JSON.stringify(updateUserBody),
    })

    // TODO: handle fetch error
    await updateUserResponse.json()

    const response = {statusCode: 200}
    return response
}

module.exports = {handler}
