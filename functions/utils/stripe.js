const Stripe = require("stripe")

const production = process.env.CONTEXT === "production"

const STRIPE_SK = production
    ? process.env.STRIPE_SK_LIVE
    : process.env.STRIPE_SK_TEST

const STRIPE_WHSEC = production
    ? process.env.STRIPE_WHSEC_LIVE
    : process.env.STRIPE_WHSEC_TEST

const options = {
    maxNetworkRetries: 2,
}

const stripe = Stripe(STRIPE_SK, options)

const validate = event => {
    try {
        stripe.webhooks.constructEvent(
            event.body,
            event.headers["stripe-signature"],
            STRIPE_WHSEC,
        )
    } catch (error) {
        return {
            isValid: false,
            error: error.message,
        }
    }

    return {
        isValid: true,
        error: null,
    }
}

module.exports = {validate}
