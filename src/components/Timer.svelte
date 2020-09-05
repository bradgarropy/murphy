<script>
    import {onMount} from "svelte"

    import Time from "./Time.svelte"
    import RoundProgress from "./RoundProgress.svelte"
    import WorkoutProgress from "./WorkoutProgress.svelte"
    import Countdown from "./Countdown.svelte"

    import {exercises} from "../stores/exercises.js"
    import {running, elapsed, startTimer, counting} from "../stores/timer.js"
    import {completed} from "../stores/workout.js"

    export let exercise

    const onCompleted = () => {
        counting.set(false)
        startTimer()
    }

    onMount(() => {
        if ($elapsed) {
            return
        }

        const countdown = document.getElementById("countdown")
        countdown.playbackRate = 1.08
        countdown.play()
    })
</script>

{#if !$elapsed}
    <section>
        <Countdown {onCompleted} />
    </section>
{:else}
    <section
        class="grid grid-rows-stats h-full items-center text-center text-5xl
            text-black uppercase tracking-tighter">
        <WorkoutProgress />

        <div>
            <Time
                time={$elapsed}
                blink={!$running && $elapsed && !$completed}
                class="block" />

            <h2 class="font-body font-black">{$exercises[exercise].name}</h2>
            <RoundProgress exercise={$exercises[exercise].name} />
        </div>
    </section>
{/if}
