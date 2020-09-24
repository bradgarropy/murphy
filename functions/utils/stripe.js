const Stripe = require("stripe")

console.log(`CONTEXT: ${process.env.CONTEXT}`)
console.log(`STRIPE_SK_TEST: ${process.env.STRIPE_SK_TEST}`)
console.log(`STRIPE_SK_LIVE: ${process.env.STRIPE_SK_LIVE}`)

const options = {
    maxNetworkRetries: 2,
}

const stripe = Stripe(process.env.STRIPE_SK_LIVE, options)

module.exports = stripe
