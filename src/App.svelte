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

<svelte:head>
    <title>MURPHY</title>

    <link rel="icon" href="/icon-192.png" />
    <link rel="stylesheet" href="index.css" />
    <link rel="manifest" href="manifest.webmanifest" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link
        href="https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&display=swap"
        rel="stylesheet" />
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet" />
</svelte:head>

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
