const Stripe = require("stripe")

const production = process.env.CONTEXT === "production"
const development = !production

const STRIPE_SK = production
    ? process.env.STRIPE_SK_LIVE
    : process.env.STRIPE_SK_TEST

console.log(`CONTEXT: ${process.env.CONTEXT}`)
console.log(`production: ${production}`)
console.log(`development: ${development}`)
console.log(`STRIPE_SK: ${STRIPE_SK}`)

const options = {
    maxNetworkRetries: 2,
}

const stripe = Stripe(STRIPE_SK, options)

module.exports = stripe
