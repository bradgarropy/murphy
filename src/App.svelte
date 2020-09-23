<script>
    import {Router, Route} from "svelte-routing"

    import ProPage from "./pages/ProPage.svelte"
    import HomePage from "./pages/HomePage.svelte"
    import Header from "./components/Header.svelte"
    import Saving from "./components/Saving.svelte"
    import ThanksPage from "./pages/ThanksPage.svelte"
    import Redirect from "./components/Redirect.svelte"
    import AccountPage from "./pages/AccountPage.svelte"
    import DetailsPage from "./pages/DetailsPage.svelte"
    import WorkoutPage from "./pages/WorkoutPage.svelte"
    import SettingsPage from "./pages/SettingsPage.svelte"
    import WorkoutsPage from "./pages/WorkoutsPage.svelte"
    import CompletedPage from "./pages/CompletedPage.svelte"
    import ProtectedRoute from "./components/ProtectedRoute.svelte"

    import {saving} from "./stores/app.js"

    import "./utils/pwa.js"
    import "./utils/identity.js"
</script>

<svelte:head>
    <title>MURPHY</title>

    <link
        href="https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&display=swap"
        rel="stylesheet"
    />

    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<audio id="countdown" src="/countdown.wav">
    <track kind="captions" />
</audio>

<Router>
    <div class="h-full grid grid-rows-layout row-gap-4">
        <Header />

        {#if $saving}
            <Saving />
        {/if}

        <Route path="/">
            <HomePage />
        </Route>

        <Route path="/timer">
            <HomePage />
        </Route>

        <Route path="/settings">
            <SettingsPage />
        </Route>

        <Route path="/completed">
            <CompletedPage />
        </Route>

        <Route path="/details">
            <DetailsPage />
        </Route>

        <Route path="/account">
            <AccountPage />
        </Route>

        <ProtectedRoute path="/workouts">
            <WorkoutsPage />
        </ProtectedRoute>

        <ProtectedRoute path="/workout/:id" let:params>
            <WorkoutPage {params} />
        </ProtectedRoute>

        <Route path="/thanks">
            <ThanksPage />
        </Route>

        <Route path="/pro">
            <ProPage />
        </Route>

        <Route>
            <Redirect to="/" />
        </Route>
    </div>
</Router>
