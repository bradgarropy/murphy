<script>
    import {fade} from "svelte/transition"
    import {get} from "svelte/store"

    import Time from "./Time.svelte"
    import Timer from "./Timer.svelte"
    import LetsGo from "./LetsGo.svelte"
    import LapTimes from "./LapTimes.svelte"
    import Completed from "./Completed.svelte"
    import NextButton from "./NextButton.svelte"
    import StopButton from "./StopButton.svelte"
    import ResetButton from "./ResetButton.svelte"
    import StartButton from "./StartButton.svelte"
    import RoundProgress from "./RoundProgress.svelte"
    import WorkoutProgress from "./WorkoutProgress.svelte"

    import {rounds} from "../stores/settings.js"
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
        const endTime = $elapsed
        const startTime = $elapsed
        const time = !exercise
            ? $elapsed
            : $elapsed - $exercises[exercise].startTime

        $exercises[exercise] = {...$exercises[exercise], endTime, time}

        if ($exercises[exercise + 1]) {
            $exercises[exercise + 1] = {...$exercises[exercise + 1], startTime}
        }

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

<main
    class="h-full grid grid-rows-timer row-gap-4 items-center"
    in:fade={{duration: 500}}>

    {#if !done}
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
    {:else}
        <Completed times={lapTimes} />
    {/if}

</main>
