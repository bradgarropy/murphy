const fetch = require("node-fetch")

const stripe = require("./utils/stripe")

const production = process.env.CONTEXT === "production"
const development = !production

const STRIPE_WHSEC = production
    ? process.env.STRIPE_WHSEC_LIVE
    : process.env.STRIPE_WHSEC_TEST

console.log(`CONTEXT: ${process.env.CONTEXT}`)
console.log(`production: ${production}`)
console.log(`development: ${development}`)
console.log(`STRIPE_WHSEC: ${STRIPE_WHSEC}`)

const handler = async (event, context) => {
    const body = JSON.parse(event.body)
    const email = body.data.object.customer_email
    const {url, token} = context.clientContext.identity

    try {
        // validate stripe webook
        stripe.webhooks.constructEvent(
            event.body,
            event.headers["stripe-signature"],
            STRIPE_WHSEC,
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
