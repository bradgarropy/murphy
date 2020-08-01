<script>
    import {navigate} from "svelte-routing"

    import Time from "./Time.svelte"
    import Redirect from "./Redirect.svelte"

    import {workout} from "../stores/workout.js"
    import {elapsed, reset} from "../stores/timer.js"
    import {WORKOUT_MUTATION} from "../graphql/mutations.js"

    const onDetails = () => {
        navigate("/details")
    }

    const onSave = async () => {
        const data = {
            user: 1,
            exercises: JSON.stringify($workout),
        }

        fetch("/api/fauna", {
            method: "POST",
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

        <div class="grid grid-rows-3 gap-6 justify-center text-xl">
            <button
                on:click={onDetails}
                class="w-64 h-20 bg-green text-white font-bold font-body
                uppercase ">
                details
            </button>

            <button
                on:click={onSave}
                class="w-64 h-20 bg-yellow text-white font-bold font-body
                uppercase ">
                save
            </button>

            <button
                on:click={onReset}
                class="w-64 h-20 bg-red text-white font-bold font-body uppercase
                ">
                reset
            </button>
        </div>
    </main>
{/if}
