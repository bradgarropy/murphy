<script>
    import Time from "./Time.svelte"
    import LapTimes from "./LapTimes.svelte"
    import NextButton from "./NextButton.svelte"
    import StopButton from "./StopButton.svelte"
    import ResetButton from "./ResetButton.svelte"
    import StartButton from "./StartButton.svelte"

    import {running, elapsed, start, stop, reset} from "../stores/timer.js"
    import {runs, rounds} from "../stores/config.js"

    $: exercises = constructExercises($runs, $rounds)

    const constructExercises = (runs, rounds) => {
        const base = ["pull ups", "push ups", "squats"]
        const exercises = new Array(rounds).fill(base).flat()

        if (runs) {
            exercises.unshift("run")
            exercises.push("run")
        }

        return exercises
    }

    let previouslyElapsed = 0
    let lapTimes = []
    let deltas = []
    let done = false
    let exercise = 0

    const onStart = () => {
        start()
    }

    const onStop = () => {
        stop()
    }

    const onNext = () => {
        lapTimes.push($elapsed)

        const delta =
            lapTimes.length === 1
                ? $elapsed
                : lapTimes[exercise] - lapTimes[exercise - 1]

        deltas = [...deltas, delta]

        if (exercise === exercises.length - 1) {
            stop()
            done = true
            return
        }

        exercise += 1
    }

    const onReset = () => {
        reset()

        lapTimes = []
        deltas = []
        done = false
        exercise = 0
    }
</script>

<h2>Exercise {exercise + 1}/{exercises.length}: {exercises[exercise]}</h2>

<Time time={$elapsed} />

{#if $elapsed}
    <ResetButton {onReset} />
{/if}

{#if !$running}
    <StartButton {onStart} />
{:else}
    <StopButton {onStop} />
{/if}

{#if $running}
    <NextButton {onNext} />
{/if}

<LapTimes times={deltas} />
