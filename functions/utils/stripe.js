const Stripe = require("stripe")

const options = {
    maxNetworkRetries: 2,
}

const stripe = Stripe(process.env.STRIPE_SECRET_KEY, options)

module.exports = stripe
