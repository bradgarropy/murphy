<script>
    import {Router, Route, Link} from "svelte-routing"

    import Home from "./components/Home.svelte"
    import Header from "./components/Header.svelte"
    import Thanks from "./components/Thanks.svelte"
    import Account from "./components/Account.svelte"
    import Details from "./components/Details.svelte"
    import Settings from "./components/Settings.svelte"
    import Completed from "./components/Completed.svelte"
    import ProtectedRoute from "./components/ProtectedRoute.svelte"

    import "./utils/pwa.js"
    import "./utils/identity.js"
</script>

<Router>
    <div class="h-full grid grid-rows-layout row-gap-4">
        <Header />

        <ProtectedRoute path="/">
            <Home />
        </ProtectedRoute>

        <ProtectedRoute path="/timer">
            <Home />
        </ProtectedRoute>

        <ProtectedRoute path="/settings">
            <Settings />
        </ProtectedRoute>

        <ProtectedRoute path="/completed">
            <Completed />
        </ProtectedRoute>

        <ProtectedRoute path="/details">
            <Details />
        </ProtectedRoute>

        <Route path="/account">
            <Account />
        </Route>

        <ProtectedRoute path="/thanks">
            <Thanks />
        </ProtectedRoute>
    </div>
</Router>
