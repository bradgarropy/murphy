import {loadStripe} from "@stripe/stripe-js"

const checkout = async email => {
    const stripe = await loadStripe("STRIPE_PK")

    stripe.redirectToCheckout({
        lineItems: [
            {
                price: "STRIPE_PRICE",
                quantity: 1,
            },
        ],
        mode: "payment",
        customerEmail: email,
        successUrl: `${window.location.origin}/thanks`,
        cancelUrl: `${window.location.origin}/account`,
    })
}

export {checkout}
