import {loadStripe} from "@stripe/stripe-js"

console.log(window.location)

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
        successUrl: "BASE_URL/thanks",
        cancelUrl: "BASE_URL/account",
    })
}

export {checkout}
