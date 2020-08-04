const fetch = require("node-fetch")
const stripe = require("stripe")("sk_test_m51gis4Lr4sqvj291N8BucPW")

const handler = async (event, context) => {
    const body = JSON.parse(event.body)

    if (body.type !== "checkout.session.completed") {
        return {statusCode: 200}
    }

    const email = body.data.object.customer_email

    const customer = await stripe.customers.create({email})
    console.log(customer)

    // const body = {
    //     app_metadata: {
    //         roles: [...user.app_metadata.roles, "pro"],
    //     },
    // }

    // const res = await fetch(`${identity.url}/admin/users/${user.sub}`, {
    //     method: "PUT",
    //     headers: {Authorization: `Bearer ${identity.token}`},
    //     body: JSON.stringify(body),
    // })

    // const data = await res.json()
    // console.log(data)

    const response = {
        statusCode: 200,
        body: "payment",
    }

    return response
}

module.exports = {handler}
