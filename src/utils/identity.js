import {loadStripe} from "@stripe/stripe-js"
import netlifyIdentity from "netlify-identity-widget"

import {user} from "../stores/user.js"

netlifyIdentity.on("init", u => {
    user.set(u)
})

netlifyIdentity.on("login", async u => {
    const userData = await u.getUserData()
    user.set(userData)

    if (!userData._fromStorage) {
        const stripe = await loadStripe("STRIPE_PUBLISHABLE_KEY")

        stripe.redirectToCheckout({
            lineItems: [
                {
                    price: "price_1HBlrkBthckZG10zk9Ho2WRR",
                    quantity: 1,
                },
            ],
            mode: "payment",
            customerEmail: userData.email,
            successUrl: "BASE_URL/thanks",
            cancelUrl: "BASE_URL/account",
        })
    }
})

netlifyIdentity.on("logout", () => {
    user.set(null)
})

netlifyIdentity.init()
