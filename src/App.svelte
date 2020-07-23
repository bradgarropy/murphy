<script>
    import {Router, Route, Link} from "svelte-routing"

    import Timer from "./components/Timer.svelte"
    import Header from "./components/Header.svelte"
    import Settings from "./components/Settings.svelte"

    if ("serviceWorker" in navigator) {
        window.addEventListener("load", function() {
            navigator.serviceWorker.register("/sw.js").then(
                function() {
                    console.log("service worker registration succeeded")
                },
                function() {
                    console.log("service worker registration failed")
                },
            )
        })
    }
</script>

<svelte:head>
    <title>MURPHY</title>

    <link rel="stylesheet" href="index.css" />
    <link rel="manifest" href="manifest.webmanifest" />
    <meta name="viewport" content="width=device-width" />

    <link
        href="https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&display=swap"
        rel="stylesheet" />
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet" />
</svelte:head>

<Router>
    <div class="h-full grid grid-rows-layout">
        <Header />

        <!-- <Link to="/timer">Timer</Link>
        <Link to="/settings">Settings</Link> -->

        <Route path="/">
            <Timer />
        </Route>

        <Route path="/timer">
            <Timer />
        </Route>

        <Route path="/settings">
            <Settings />
        </Route>

    </div>
</Router>
