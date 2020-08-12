const stripe = require("stripe")("sk_test_m51gis4Lr4sqvj291N8BucPW")

const handler = async (event, context) => {
    console.log(event)
    console.log(context)
    const {user} = JSON.parse(event.body)

    const customer = await stripe.customers.create({email: user.email})
    console.log(customer)

    const body = {
        app_metadata: {
            roles: ["free"],
        },
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify(body),
    }

    return response
}

module.exports = {handler}
