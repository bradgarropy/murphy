import {loadStripe} from "@stripe/stripe-js"

const checkout = async email => {
    const stripe = await loadStripe("STRIPE_PK")

    stripe.redirectToCheckout({
        lineItems: [
            {
                price: "price_1HUw5bBthckZG10zjIDeUt7u",
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
