<script>
    import {Route} from "svelte-routing"

    import Redirect from "./Redirect.svelte"

    import {user} from "../stores/user.js"

    import {isPro} from "../utils/utils.js"

    export let path
</script>

<Route {path} let:params>
    {#if !isPro($user)}
        <Redirect to="/account" />
    {:else}
        <slot {params} />
    {/if}
</Route>
