<script>
    import {navigate} from "svelte-routing"
    import netlifyIdentity from "netlify-identity-widget"

    import {user} from "../stores/user.js"

    const onLogin = () => {
        netlifyIdentity.open("login")
    }

    const onLogout = () => {
        netlifyIdentity.logout()
    }

    const onSignup = () => {
        netlifyIdentity.open("signup")
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
    {/if}

</main>
