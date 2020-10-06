<script>
    import {Route} from "svelte-routing"

    import Redirect from "./Redirect.svelte"

    import {user} from "../stores/user.js"

    export let path
</script>

<Route {path} let:params>
    {#if !$user}
        <Redirect to="/signup" />
    {:else}
        <slot {params} />
    {/if}
</Route>
