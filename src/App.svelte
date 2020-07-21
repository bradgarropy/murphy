<script>
    import {Router, Route, Link} from "svelte-routing"

    import Timer from "./components/Timer.svelte"
    import Settings from "./components/Settings.svelte"
</script>

<svelte:head>
    <link rel="stylesheet" href="index.css" />
</svelte:head>

<Router>
    <div class="min-h-screen grid grid-rows-layout">
        <h1 class="bg-yellow-400 text-center text-6xl p-6 uppercase">murphy</h1>

        <!-- <Link to="/timer">Timer</Link>
        <Link to="/settings">Settings</Link> -->

        <main>
            <Route path="/">
                <Timer />
            </Route>

            <Route path="/timer">
                <Timer />
            </Route>

            <Route path="/settings">
                <Settings />
            </Route>
        </main>
    </div>
</Router>
