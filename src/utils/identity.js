import {navigate} from "svelte-routing"
import netlifyIdentity from "netlify-identity-widget"

import {user} from "../stores/user.js"

netlifyIdentity.on("init", u => {
    console.log("init", u)
    user.set(u)
})

netlifyIdentity.on("login", u => {
    console.log("login", u)
    user.set(u)
    netlifyIdentity.close()
    navigate("/")
})

netlifyIdentity.on("logout", () => {
    user.set(null)
    navigate("/")
})

netlifyIdentity.init()
