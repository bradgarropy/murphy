<script>
    import {Route} from "svelte-routing"

    import Redirect from "./Redirect.svelte"

    import {user} from "../stores/user.js"

    export let path
</script>

<Route {path}>
    {#if !$user}
        <Redirect to="/account" />
    {:else}
        <slot />
    {/if}
</Route>
