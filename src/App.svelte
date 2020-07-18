<script>
    import Time from "./components/Time.svelte"
    import LapTimes from "./components/LapTimes.svelte"
    import NextButton from "./components/NextButton.svelte"
    import ResetButton from "./components/ResetButton.svelte"
    import StartStopButton from "./components/StartStopButton.svelte"

    import {running, elapsed, start, stop, reset} from "./stores/timer.js"
    import {runs, rounds} from "./stores/config.js"

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

    const lapTimer = () => {
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

<div>
    <h1>Murph Tracker</h1>

    <label>run</label>
    <input type="checkbox" bind:checked={$runs} disabled={$elapsed} />

    <label>rounds</label>
    <input
        type="number"
        bind:value={$rounds}
        min="1"
        max="20"
        disabled={$elapsed} />

    <h2>Exercise {exercise + 1}/{exercises.length}: {exercises[exercise]}</h2>

    <Time time={$elapsed} />

    <StartStopButton {onStart} {onStop} running={$running} />

    {#if $running}
        <NextButton onNext={lapTimer} />
    {/if}

    {#if $elapsed}
        <ResetButton {onReset} />
    {/if}

    <LapTimes times={deltas} />
</div>
