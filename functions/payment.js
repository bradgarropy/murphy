const fetch = require("node-fetch")
const {generate} = require("generate-password")

const stripe = require("./utils/stripe")

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

    const options = {
        length: 10,
        numbers: true,
        symbols: true,
        lowercase: true,
        uppercase: true,
        strict: true,
    }

    // create temporary password
    const password = generate(options)

    // TODO: HOLY SHIT REMOVE THIS!
    console.log(password)

    const signupBody = {
        email: customer.email,
        password,
    }

    // create netlify identity user
    const signupResponse = await fetch(`${url}/signup`, {
        method: "POST",
        headers: {Authorization: `Bearer ${token}`},
        body: JSON.stringify(signupBody),
    })

    // TODO: handle fetch error
    const {id} = await signupResponse.json()

    const userBody = {
        app_metadata: {
            roles: ["free", "pro"],
        },
    }

    // update user roles
    const userResponse = await fetch(`${url}/admin/users/${id}`, {
        method: "PUT",
        headers: {Authorization: `Bearer ${token}`},
        body: JSON.stringify(userBody),
    })

    // TODO: handle fetch error
    await userResponse.json()

    const recoverBody = {
        email: customer.email,
    }

    const recoverResponse = await fetch(`${url}/recover`, {
        method: "POST",
        headers: {Authorization: `Bearer ${token}`},
        body: JSON.stringify(recoverBody),
    })

    // TODO: handle fetch error
    const recoverData = await recoverResponse.json()
    console.log(recoverData)

    const response = {statusCode: 200}
    return response
}

module.exports = {handler}
