const fetch = require("node-fetch")
const {readUserByEmail} = require("./utils/fauna")
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const handler = async (event, context) => {
    const body = JSON.parse(event.body)
    const {customerId} = body.data.object
    const {url, token} = context.clientContext.identity

    console.log(context.clientContext.identity.url)
    console.log(context.clientContext.identity.token)
    console.log(body)

    try {
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

    if (body.type !== "checkout.session.completed") {
        return {statusCode: 200}
    }

    const customer = await stripe.customers.retrieve(customerId)
    console.log(customer)

    const user = {
        email: null,
        password: "foobar",
    }

    const signupResponse = await fetch(`${url}/signup`, {
        method: "POST",
        headers: {Authorization: `Bearer ${token}`},
        body: JSON.stringify(user),
    })

    console.log(signupResponse)

    // TODO: handle fetch error
    const signupData = await signupResponse.json()
    console.log(signupData)

    const response = {statusCode: 200}
    return response

    // const faunaResponse = await readUserByEmail(email)

    // const {id} = faunaResponse.data
    // const {url, token} = context.clientContext.identity

    // const updates = {
    //     app_metadata: {
    //         roles: ["free", "pro"],
    //     },
    // }

    // const fetchResponse = await fetch(`${url}/admin/users/${id}`, {
    //     method: "PUT",
    //     headers: {Authorization: `Bearer ${token}`},
    //     body: JSON.stringify(updates),
    // })

    // // TODO: handle fetch error
    // await fetchResponse.json()

    // const response = {statusCode: 200}
    // return response
}

module.exports = {handler}
