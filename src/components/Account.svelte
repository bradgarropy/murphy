<script>
    import {navigate} from "svelte-routing"
    import {loadStripe} from "@stripe/stripe-js"
    import netlifyIdentity from "netlify-identity-widget"

    import {user} from "../stores/user.js"

    const onLogin = () => {
        netlifyIdentity.on("login", u => {
            user.set(u)
            netlifyIdentity.close()
            netlifyIdentity.off("login")
            navigate("/")
        })

        netlifyIdentity.open("login")
    }

    const onLogout = () => {
        netlifyIdentity.logout()
        navigate("/")
    }

    const onSignup = () => {
        netlifyIdentity.open("signup")
    }

    const onPro = async () => {
        console.log("onPro")
        const stripe = await loadStripe("pk_test_dhKNdBfrivRQXMnWPd7Msrow")

        stripe.redirectToCheckout({
            lineItems: [
                {
                    price: "price_1HBlrkBthckZG10zk9Ho2WRR",
                    quantity: 1,
                },
            ],
            mode: "payment",
            // successUrl: "https://murphee.netlify.app/thanks",
            // cancelUrl: "https://murphee.netlify.app/account",
            successUrl: "http://localhost:8888/thanks",
            cancelUrl: "http://localhost:8888/account",
        })
    }
</script>

<main class="grid content-center justify-center gap-6">

    {#if $user}
        <button
            on:click={onLogout}
            class="w-64 h-20 bg-red text-white text-2xl font-bold font-body
            uppercase ">
            logout
        </button>
    {:else}
        <button
            on:click={onLogin}
            class="w-64 h-20 bg-green text-white text-2xl font-bold font-body
            uppercase ">
            login
        </button>

        <button
            on:click={onSignup}
            class="w-64 h-20 bg-yellow text-white text-2xl font-bold font-body
            uppercase ">
            signup
        </button>

        <button
            on:click={onPro}
            class="w-64 h-20 bg-yellow text-white text-2xl font-bold font-body
            uppercase ">
            go pro
        </button>
    {/if}

</main>
