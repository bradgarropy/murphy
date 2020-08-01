<script>
    import {Router, Route, Link} from "svelte-routing"

    import Home from "./components/Home.svelte"
    import Header from "./components/Header.svelte"
    import Details from "./components/Details.svelte"
    import Settings from "./components/Settings.svelte"
    import Completed from "./components/Completed.svelte"

    if ("serviceWorker" in navigator) {
        window.addEventListener("load", function() {
            navigator.serviceWorker.register("/sw.js").then(() => {}, () => {})
        })
    }
</script>

<Router>
    <div class="h-full grid grid-rows-layout row-gap-4">
        <Header />

        <Route path="/">
            <Home />
        </Route>

        <Route path="/timer">
            <Home />
        </Route>

        <Route path="/settings">
            <Settings />
        </Route>

        <Route path="/completed">
            <Completed />
        </Route>

        <Route path="/details">
            <Details />
        </Route>

    </div>
</Router>
