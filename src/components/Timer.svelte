<script>
    import {exercises} from "../stores/exercises.js"
    import {counting, elapsed, startTimer, ticking} from "../stores/timer.js"
    import {completed} from "../stores/workout.js"
    import {getExerciseLabel} from "../utils/utils.js"
    import Countdown from "./Countdown.svelte"
    import RoundProgress from "./RoundProgress.svelte"
    import Time from "./Time.svelte"
    import WorkoutProgress from "./WorkoutProgress.svelte"

    export let exercise

    const onCompleted = () => {
        counting.set(false)
        startTimer()
    }
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
                blink={!$ticking && $elapsed && !$completed}
                class="block" />

            <h2 class="font-body font-black">{getExerciseLabel($exercises[exercise].name)}</h2>
            <RoundProgress exercise={$exercises[exercise].name} />
        </div>
    </section>
{/if}
