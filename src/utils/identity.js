import {navigate} from "svelte-routing"
import netlifyIdentity from "netlify-identity-widget"

import {user} from "../stores/user.js"

netlifyIdentity.on("init", u => {
    user.set(u)
})

netlifyIdentity.on("login", async u => {
    const userData = await u.getUserData()
    user.set(userData)

    const returningUser = localStorage.getItem("returningUser")

    if (!returningUser || returningUser === "false") {
        localStorage.setItem("returningUser", "true")
        netlifyIdentity.close()
        navigate("/")
    }
})

netlifyIdentity.on("logout", () => {
    user.set(null)
})

netlifyIdentity.init()
