<script>
    import {Router, Route, Link} from "svelte-routing"

    import HomePage from "./pages/HomePage.svelte"
    import Header from "./components/Header.svelte"
    import Saving from "./components/Saving.svelte"
    import ThanksPage from "./pages/ThanksPage.svelte"
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

<Router>
    <div class="h-full grid grid-rows-layout row-gap-4">
        <Header />

        {#if $saving}
            <Saving />
        {/if}

        <ProtectedRoute path="/">
            <HomePage />
        </ProtectedRoute>

        <ProtectedRoute path="/timer">
            <HomePage />
        </ProtectedRoute>

        <ProtectedRoute path="/settings">
            <SettingsPage />
        </ProtectedRoute>

        <ProtectedRoute path="/completed">
            <CompletedPage />
        </ProtectedRoute>

        <ProtectedRoute path="/details">
            <DetailsPage />
        </ProtectedRoute>

        <Route path="/account">
            <AccountPage />
        </Route>

        <ProtectedRoute path="/workouts">
            <WorkoutsPage />
        </ProtectedRoute>

        <ProtectedRoute path="/workout/:id" let:params>
            <WorkoutPage {params} />
        </ProtectedRoute>

        <ProtectedRoute path="/thanks">
            <ThanksPage />
        </ProtectedRoute>
    </div>
</Router>
