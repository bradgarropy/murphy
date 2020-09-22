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

    const getUserResponse = await fetch(`${url}/admin/users`, {
        method: "GET",
        headers: {Authorization: `Bearer ${token}`},
    })

    // TODO: handle fetch error
    const getUserData = await getUserResponse.json()
    console.log(getUserData)

    const response = {statusCode: 200}
    return response

    // const userBody = {
    //     app_metadata: {
    //         roles: ["free", "pro"],
    //     },
    // }

    // // update user roles
    // const userResponse = await fetch(`${url}/admin/users/${id}`, {
    //     method: "PUT",
    //     headers: {Authorization: `Bearer ${token}`},
    //     body: JSON.stringify(userBody),
    // })

    // // TODO: handle fetch error
    // await userResponse.json()

    // const response = {statusCode: 200}
    // return response
}

module.exports = {handler}
