<script>
    import {fade} from "svelte/transition"
    import netlifyIdentity from "netlify-identity-widget"

    import {user} from "../stores/user.js"

    const refreshUser = async () => {
        const currentUser = await netlifyIdentity.currentUser()
        const userData = await currentUser.getUserData()
        user.set(userData)
    }

    refreshUser()
</script>

<main in:fade={{duration: 500}}>
    <h2>Thanks!</h2>
</main>
