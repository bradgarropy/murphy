import {navigate} from "svelte-routing"
import netlifyIdentity from "netlify-identity-widget"

import {user} from "../stores/user.js"

import {checkout} from "./stripe"

netlifyIdentity.on("init", u => {
    user.set(u)
})

netlifyIdentity.on("login", async u => {
    const userData = await u.getUserData()
    user.set(userData)

    const now = Date.now()
    const created = new Date(userData.created_at)
    const minute = 60 * 1000
    const isSignup = now - created < minute

    // fresh sign up
    if (isSignup && !userData._fromStorage) {
        checkout(userData.email)
    }
    // fresh login
    else if (!userData._fromStorage) {
        netlifyIdentity.close()
        navigate("/")
    }

    // do nothing on local storage logins
})

netlifyIdentity.on("logout", () => {
    user.set(null)
})

netlifyIdentity.init()
