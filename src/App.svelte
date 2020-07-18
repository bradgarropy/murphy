<script>
    import {Router, Route, Link} from "svelte-routing"

    import Timer from "./components/Timer.svelte"
    import Settings from "./components/Settings.svelte"
</script>

<Router>
    <Link to="/">Home</Link>
    <Link to="/timer">Timer</Link>
    <Link to="/settings">Settings</Link>

    <h1>Murph Tracker</h1>

    <Route path="/">
        <Timer />
    </Route>

    <Route path="/timer">
        <Timer />
    </Route>

    <Route path="/settings">
        <Settings />
    </Route>

</Router>
