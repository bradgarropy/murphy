<script>
    import {fade} from "svelte/transition"
    import {navigate} from "svelte-routing"
    import netlifyIdentity from "netlify-identity-widget"

    import Time from "./Time.svelte"
    import Redirect from "./Redirect.svelte"

    import {user} from "../stores/user.js"
    import {completed} from "../stores/workout.js"
    import {elapsed, reset} from "../stores/timer.js"
    import {WORKOUT_MUTATION} from "../graphql/mutations.js"

    const onDetails = () => {
        navigate("/details")
    }

    const onReset = () => {
        reset()
        completed.set(false)
        navigate("/")
    }
</script>

{#if !$elapsed}
    <Redirect to="/" />
{:else}
    <main
        class="grid grid-rows-completed justify-center items-center pb-10"
        in:fade={{duration: 500}}>
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
                on:click={onReset}
                class="w-64 h-20 bg-red text-white text-2xl font-bold font-body
                uppercase ">
                reset
            </button>
        </div>
    </main>
{/if}
