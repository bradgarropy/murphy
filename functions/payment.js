const fetch = require("node-fetch")
const Stripe = require("stripe")

const stripe = Stripe(process.env.STRIPE_SECRET_KEY, {maxNetworkRetries: 2})

const handler = async (event, context) => {
    const body = JSON.parse(event.body)
    const customerId = body.data.object.customer
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

    // get stripe customer
    const customer = await stripe.customers.retrieve(customerId)

    const user = {
        email: customer.email,
        password: "foobar",
    }

    // create netlify identity user
    const signupResponse = await fetch(`${url}/signup`, {
        method: "POST",
        headers: {Authorization: `Bearer ${token}`},
        body: JSON.stringify(user),
    })

    // TODO: handle fetch error
    const {id} = await signupResponse.json()

    const updates = {
        app_metadata: {
            roles: ["free", "pro"],
        },
    }

    // update user roles
    const userResponse = await fetch(`${url}/admin/users/${id}`, {
        method: "PUT",
        headers: {Authorization: `Bearer ${token}`},
        body: JSON.stringify(updates),
    })

    // TODO: handle fetch error
    await userResponse.json()

    const response = {statusCode: 200}
    return response
}

module.exports = {handler}
