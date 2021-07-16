<script>
    import netlifyIdentity from "netlify-identity-widget"
    import {fade} from "svelte/transition"
    import {navigate} from "svelte-routing"

    import {user} from "../stores/user.js"

    const onLogin = () => {
        netlifyIdentity.open("login")
    }

    const onLogout = () => {
        netlifyIdentity.logout()
        navigate("/")
    }

    const onSignup = () => {
        navigate("/signup")
    }
</script>

<svelte:head>
    <title>MURPHY | account</title>
</svelte:head>

<main
    class="grid content-center justify-center gap-6"
    in:fade={{duration: 500}}
>
    {#if $user}
        <button
            on:click={onLogout}
            class="w-64 h-20 bg-red text-white text-2xl leading-normal font-bold font-body
            uppercase"
        >
            logout
        </button>
    {:else}
        <button
            on:click={onLogin}
            class="w-64 h-20 bg-green text-white text-2xl leading-normal font-bold font-body
            uppercase"
        >
            login
        </button>

        <button
            on:click={onSignup}
            class="w-64 h-20 bg-yellow text-black text-2xl leading-normal font-bold font-body uppercase"
        >
            signup
        </button>
    {/if}
</main>
