// const fetch = require("node-fetch")
const stripe = require("stripe")("sk_test_m51gis4Lr4sqvj291N8BucPW")

const handler = async (event, context) => {
    const body = JSON.parse(event.body)
    const email = body.data.object.customer_email
    console.log(email)

    if (body.type !== "checkout.session.completed") {
        return {statusCode: 200}
    }

    const {url, token} = context.clientContext.identity

    const updates = {
        app_metadata: {
            roles: ["free", "pro"],
        },
    }

    const res = await fetch(`${url}/admin/user`, {
        method: "PUT",
        headers: {Authorization: `Bearer ${token}`},
        body: JSON.stringify(updates),
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
