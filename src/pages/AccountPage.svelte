<script>
    import {fade} from "svelte/transition"
    import {navigate} from "svelte-routing"
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

    const onGoPro = () => {
        navigate("/pro")
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
    {:else}
        <button
            on:click={onLogin}
            class="w-64 h-20 bg-green text-white text-2xl font-bold font-body
            uppercase ">
            login
        </button>
    {/if}

    {#if !isPro($user)}
        <button
            on:click={onGoPro}
            class="font-header mb-8 px-6 py-1 bg-yellow text-5xl uppercase transform -skew-x-6 tracking-tighter"
            >
            go pro
        </button>
    {/if}
</main>
