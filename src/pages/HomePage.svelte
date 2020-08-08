<script>
    import {fade} from "svelte/transition"
    import {navigate} from "svelte-routing"

    import Timer from "../components/Timer.svelte"
    import LetsGo from "../components/LetsGo.svelte"
    import NextButton from "../components/NextButton.svelte"
    import StopButton from "../components/StopButton.svelte"
    import ResetButton from "../components/ResetButton.svelte"
    import StartButton from "../components/StartButton.svelte"

    import {user} from "../stores/user.js"
    import {saving} from "../stores/app.js"
    import {rounds} from "../stores/settings.js"
    import {exercises} from "../stores/exercises.js"
    import {workout, completed} from "../stores/workout.js"
    import {
        running,
        elapsed,
        laps,
        start,
        lap,
        stop,
        reset,
    } from "../stores/timer.js"

    import {WORKOUT_MUTATION} from "../graphql/mutations.js"

    let exercise = 0

    const onStart = () => {
        start()
    }

    const onStop = () => {
        stop()
    }

    const onNext = async () => {
        lap()

        if (exercise === $exercises.length - 1) {
            stop()
            completed.set(true)
            saving.set(true)

            const data = {
                email: $user.email,
                exercises: JSON.stringify($workout),
            }

            const response = await fetch("/api/fauna", {
                method: "POST",
                body: JSON.stringify({
                    query: WORKOUT_MUTATION,
                    variables: {data},
                }),
            })

            // TODO: handle fetch error
            const res = await response.json()
            saving.set(false)

            navigate("/completed")
            return
        }

        exercise += 1
    }

    const onReset = () => {
        reset()
        completed.set(false)

        exercise = 0
    }
</script>

<main
    class="h-full grid grid-rows-timer row-gap-4 items-center"
    in:fade={{duration: 500}}>
    {#if !$running && !$elapsed}
        <LetsGo />
    {:else}
        <Timer {exercise} />
    {/if}

    {#if !$running}
        <StartButton {onStart} />
    {:else}
        <NextButton {onNext} />
    {/if}

    {#if !$running && $elapsed}
        <ResetButton {onReset} />
    {:else}
        <StopButton {onStop} />
    {/if}
</main>
