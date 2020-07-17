<script>
    import Time from "./components/Time.svelte"
    import LapTimes from "./components/LapTimes.svelte"
    import NextButton from "./components/NextButton.svelte"
    import ResetButton from "./components/ResetButton.svelte"
    import StartStopButton from "./components/StartStopButton.svelte"

    import config from "./stores/config.js"

    $: exercises = constructExercises($config)

    const constructExercises = config => {
        const base = ["pull ups", "push ups", "squats"]
        const exercises = new Array(config.rounds).fill(base).flat()

        if (config.runs) {
            exercises.unshift("run")
            exercises.push("run")
        }

        return exercises
    }

    let id
    let start
    let elapsed = 0
    let ticking = false
    let previouslyElapsed = 0
    let lapTimes = []
    let deltas = []
    let done = false
    let exercise = 0

    const startTimer = () => {
        ticking = true
        start = Date.now()

        id = setInterval(() => {
            elapsed = previouslyElapsed + Date.now() - start
        }, 10)
    }

    const stopTimer = () => {
        ticking = false
        previouslyElapsed = elapsed

        clearInterval(id)
    }

    const lapTimer = () => {
        lapTimes.push(elapsed)

        const delta =
            lapTimes.length === 1
                ? elapsed
                : lapTimes[exercise] - lapTimes[exercise - 1]

        deltas = [...deltas, delta]

        if (exercise === exercises.length - 1) {
            stopTimer()
            done = true
            return
        }

        exercise += 1
    }

    const resetTimer = () => {
        elapsed = 0
        ticking = false
        previouslyElapsed = 0
        lapTimes = []
        deltas = []
        done = false
        exercise = 0

        clearInterval(id)
    }
</script>

<div>
    <h1>Murph Tracker</h1>

    <label>run</label>
    <input type="checkbox" bind:checked={$config.runs} disabled={elapsed} />

    <label>rounds</label>
    <input
        type="number"
        bind:value={$config.rounds}
        min="1"
        max="20"
        disabled={elapsed} />

    <h2>Exercise {exercise}/{exercises.length}: {exercises[exercise]}</h2>

    <Time time={elapsed} />

    <StartStopButton onStart={startTimer} onStop={stopTimer} {ticking} />

    {#if ticking}
        <NextButton onNext={lapTimer} />
    {/if}

    {#if elapsed}
        <ResetButton onReset={resetTimer} />
    {/if}

    <LapTimes times={deltas} />
</div>
