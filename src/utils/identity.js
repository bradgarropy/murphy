import netlifyIdentity from "netlify-identity-widget"

import {user} from "../stores/user.js"

netlifyIdentity.on("init", u => {
    console.log("init")
    user.set(u)
})

netlifyIdentity.on("logout", () => {
    console.log("logout")
    user.set(null)
})

netlifyIdentity.init()
