const Stripe = require("stripe")

const production = process.env.CONTEXT === "production"
const STRIPE_SK = production
    ? process.env.STRIPE_SK_LIVE
    : process.env.STRIPE_SK_TEST

const options = {
    maxNetworkRetries: 2,
}

const stripe = Stripe(STRIPE_SK, options)

module.exports = stripe
