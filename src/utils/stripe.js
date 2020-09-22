import {loadStripe} from "@stripe/stripe-js"

const checkout = (email) => {
    const stripe = await loadStripe("STRIPE_PUBLISHABLE_KEY")

    stripe.redirectToCheckout({
        lineItems: [
            {
                price: "price_1HBlrkBthckZG10zk9Ho2WRR",
                quantity: 1,
            },
        ],
        mode: "payment",
        customerEmail: email,
        successUrl: "BASE_URL/thanks",
        cancelUrl: "BASE_URL/account",
    })
}

export {checkout}
