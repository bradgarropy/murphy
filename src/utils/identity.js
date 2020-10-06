import {navigate} from "svelte-routing"
import netlifyIdentity from "netlify-identity-widget"

import {user} from "../stores/user.js"

netlifyIdentity.on("init", u => {
    user.set(u)
})

netlifyIdentity.on("login", async u => {
    const userData = await u.getUserData()
    user.set(userData)

    // fresh login
    if (!userData._fromStorage) {
        netlifyIdentity.close()
        navigate("/")
    }

    // do nothing on local storage logins
})

netlifyIdentity.on("logout", () => {
    user.set(null)
})

netlifyIdentity.init()
