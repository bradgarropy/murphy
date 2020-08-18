<script>
    import {fade} from "svelte/transition"
    import {navigate} from "svelte-routing"


    import Timer from "../components/Timer.svelte"
    import LetsGo from "../components/LetsGo.svelte"
    import NextButton from "../components/NextButton.svelte"
    import StopButton from "../components/StopButton.svelte"
    import ResetButton from "../components/ResetButton.svelte"
    import StartButton from "../components/StartButton.svelte"

    import {
        running,
        elapsed,
        start,
        lap,
        stop,
        resetTimer,
    } from "../stores/timer.js"
    import {user} from "../stores/user.js"
    import {saving} from "../stores/app.js"
    import {exercises} from "../stores/exercises.js"
    import {date, completed, workout, resetWorkout} from "../stores/workout.js"

    import {isPro} from "../utils/utils.js"

    let exercise = 0

    const onStart = () => {
        start()
        date.set(Date.now())
    }

    const onStop = () => {
        stop()
    }

    const onNext = async () => {
        lap()

        if (exercise === $exercises.length - 1) {
            stop()
            completed.set(true)

            if(isPro($user)) {
                // save
                saving.set(true)

                const data = {
                    date: new Date($date).toISOString(),
                    exercises: JSON.stringify($workout),
                }

                const response = await fetch("/api/create-workout", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        Authorization: `Bearer ${$user.token.access_token}`,
                    },
                })

                // TODO: handle fetch error
                await response.json()
                saving.set(false)
            }

            navigate("/completed")
            return
        }

        exercise += 1
    }

    const onReset = () => {
        resetTimer()
        resetWorkout()

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
