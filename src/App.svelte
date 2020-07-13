<script>
    import {format} from "date-fns"

    const config = {
        run: true,
        rounds: 20,
    }

    const constructExercises = () => {
        const base = ["pull ups", "push ups", "squats"]
        const exercises = new Array(config.rounds).fill(base).flat()

        if (config.run) {
            exercises.unshift("run")
            exercises.push("run")
        }

        return exercises
    }

    const exercises = constructExercises()

    let id
    let start
    let elapsed = 0
    let ticking = false
    let previouslyElapsed = 0

    let exercise = 0

    const startTimer = () => {
        ticking = true
        start = Date.now()

        id = setInterval(
            () => (elapsed = previouslyElapsed + Date.now() - start),
            10,
        )
    }

    const stopTimer = () => {
        ticking = false
        previouslyElapsed = elapsed

        clearInterval(id)
    }

    const lapTimer = () => {
        if (exercise === exercises.length - 1) {
            stopTimer()
            return
        }

        exercise += 1
    }

    const resetTimer = () => {
        elapsed = 0
        ticking = false
        previouslyElapsed = 0

        exercise = 0

        clearInterval(id)
    }
</script>

<div>
    <h1>Murph Tracker</h1>
    <h2>Exercise {exercise}: {exercises[exercise]}</h2>

    <p>{format(elapsed, 'mm:ss:SS')}</p>

    {#if !ticking}
        <button on:click={startTimer}>START</button>
    {:else}
        <button on:click={stopTimer}>STOP</button>
    {/if}

    <button on:click={lapTimer}>NEXT</button>
    <button on:click={resetTimer}>RESET</button>
</div>
