<script>
    import Time from "./Time.svelte"
    import LapTimes from "./LapTimes.svelte"
    import NextButton from "./NextButton.svelte"
    import StopButton from "./StopButton.svelte"
    import ResetButton from "./ResetButton.svelte"
    import StartButton from "./StartButton.svelte"

    import {exercises} from "../stores/exercises.js"
    import {running, elapsed, start, stop, reset} from "../stores/timer.js"

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

        if (exercise === $exercises.length - 1) {
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

<main class="h-full grid grid-rows-timer row-gap-4 items-center">

    <section class="text-center text-5xl text-black">
        <h2 class="font-body font-black uppercase tracking-tighter">
            {$exercises[exercise].name}
        </h2>

        <Time time={$elapsed} blink={!$running && $elapsed} class="block" />
    </section>

    <!-- <LapTimes times={deltas} /> -->

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
