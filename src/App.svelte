<script>
    import {Router, Route, Link} from "svelte-routing"

    import Home from "./components/Home.svelte"
    import Header from "./components/Header.svelte"
    import Settings from "./components/Settings.svelte"

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

    </div>
</Router>
