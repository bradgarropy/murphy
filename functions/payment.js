const fetch = require("node-fetch")
const graphql = require("./utils/graphql")
const {USER_QUERY} = require("./graphql/queries")
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const handler = async (event, context) => {
    const body = JSON.parse(event.body)
    const email = body.data.object.customer_email

    try {
        stripe.webhooks.constructEvent(
            event.body,
            event.headers["stripe-signature"],
            process.env.STRIPE_WEBHOOK_SECRET,
        )
    } catch (err) {
        console.log(`Webhook Error: ${err.message}`)

        return {
            statusCode: 400,
            body: `Webhook Error: ${err.message}`,
        }
    }

    // TODO: verify this came from stripe

    if (body.type !== "checkout.session.completed") {
        return {statusCode: 200}
    }

    const graphqlResponse = await graphql({
        query: USER_QUERY,
        variables: {email},
    })

    const {id} = graphqlResponse.data.getUserByEmail
    const {url, token} = context.clientContext.identity

    const updates = {
        app_metadata: {
            roles: ["free", "pro"],
        },
    }

    const fetchResponse = await fetch(`${url}/admin/users/${id}`, {
        method: "PUT",
        headers: {Authorization: `Bearer ${token}`},
        body: JSON.stringify(updates),
    })

    // TODO: handle fetch error
    await fetchResponse.json()

    const response = {
        statusCode: 200,
        body: "pro",
    }

    return response
}

module.exports = {handler}
