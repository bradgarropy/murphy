<script>
    import {fade} from "svelte/transition"
    import {navigate} from "svelte-routing"
    import {loadStripe} from "@stripe/stripe-js"
    import netlifyIdentity from "netlify-identity-widget"

    import {user} from "../stores/user.js"

    import {isPro} from "../utils/utils.js"

    const onLogin = () => {
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
        const stripe = await loadStripe("pk_test_dhKNdBfrivRQXMnWPd7Msrow")

        stripe.redirectToCheckout({
            lineItems: [
                {
                    price: "price_1HBlrkBthckZG10zk9Ho2WRR",
                    quantity: 1,
                },
            ],
            mode: "payment",
            customerEmail: $user.email,
            successUrl: "BASE_URL/thanks",
            cancelUrl: "BASE_URL/account",
        })
    }
</script>

<main
    class="grid content-center justify-center gap-6"
    in:fade={{duration: 500}}>

    {#if $user}
        <button
            on:click={onLogout}
            class="w-64 h-20 bg-red text-white text-2xl font-bold font-body
            uppercase ">
            logout
        </button>

        {#if !isPro($user)}
            <button
                on:click={onPro}
                class="w-64 h-20 bg-yellow text-white text-2xl font-bold font-body
                uppercase ">
                go pro
            </button>
        {/if}
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
    {/if}
</main>
