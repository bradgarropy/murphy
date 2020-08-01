<script>
    import {Router, Route, Link} from "svelte-routing"

    import Home from "./components/Home.svelte"
    import Header from "./components/Header.svelte"
    import Details from "./components/Details.svelte"
    import Settings from "./components/Settings.svelte"
    import Completed from "./components/Completed.svelte"

    import {WORKOUT_MUTATION} from "./graphql/mutations.js"
    import {WORKOUTS_QUERY, USER_WORKOUTS_QUERY} from "./graphql/queries.js"

    if ("serviceWorker" in navigator) {
        window.addEventListener("load", function() {
            navigator.serviceWorker.register("/sw.js").then(() => {}, () => {})
        })
    }

    const user = 3

    const data = {
        user: 3,
        exercises: new Date().toISOString(),
    }

    // fetch("/api/fauna", {
    //     method: "POST",
    //     body: JSON.stringify({query: WORKOUT_MUTATION, variables: {data}}),
    // })
    //     .then(r => r.json())
    //     .then(data => console.log("data returned:", data))

    // fetch("/api/fauna", {
    //     method: "POST",
    //     body: JSON.stringify({query: WORKOUTS_QUERY}),
    // })
    //     .then(r => r.json())
    //     .then(data => console.log("data returned:", data))

    // fetch("/api/fauna", {
    //     method: "POST",
    //     body: JSON.stringify({query: USER_WORKOUTS_QUERY, variables: {user}}),
    // })
    //     .then(r => r.json())
    //     .then(data => console.log("data returned:", data))
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
