<script>
    import {Route} from "svelte-routing"

    import {user} from "../stores/user.js"
    import Redirect from "./Redirect.svelte"

    export let path
</script>

<Route {path} let:params>
    {#if !$user}
        <Redirect to="/signup" />
    {:else}
        <slot {params} />
    {/if}
</Route>
