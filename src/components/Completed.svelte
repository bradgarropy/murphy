<script>
    import {navigate} from "svelte-routing"
    import netlifyIdentity from "netlify-identity-widget"

    import Time from "./Time.svelte"
    import Redirect from "./Redirect.svelte"

    import {user} from "../stores/user.js"
    import {workout} from "../stores/workout.js"
    import {elapsed, reset} from "../stores/timer.js"
    import {WORKOUT_MUTATION} from "../graphql/mutations.js"

    const onDetails = () => {
        navigate("/details")
    }

    const onSave = async () => {
        const data = {
            id: $user.id,
            email: $user.email,
            exercises: JSON.stringify($workout),
        }

        fetch("/api/fauna", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${$user.token.access_token}`,
            },
            body: JSON.stringify({
                query: WORKOUT_MUTATION,
                variables: {data},
            }),
        })

        // TODO: handle fetch error
        // TODO: handle saving state
    }

    const onReset = () => {
        reset()
        navigate("/")
    }
</script>

{#if !$elapsed}
    <Redirect to="/" />
{:else}
    <main class="grid grid-rows-completed justify-center items-center pb-10">
        <h2 class="text-center text-4xl uppercase font-header tracking-tighter">
            completed
        </h2>

        <Time time={$elapsed} />

        <div class="grid grid-rows-3 gap-6 justify-center">
            <button
                on:click={onDetails}
                class="w-64 h-20 bg-green text-white text-2xl font-bold
                font-body uppercase ">
                details
            </button>

            <button
                on:click={onSave}
                disabled={!$user}
                class="w-64 h-20 bg-yellow disabled:bg-gray text-white text-2xl
                font-bold font-body uppercase ">
                save
            </button>

            <button
                on:click={onReset}
                class="w-64 h-20 bg-red text-white text-2xl font-bold font-body
                uppercase ">
                reset
            </button>
        </div>
    </main>
{/if}
