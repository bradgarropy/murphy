<script>
    import Time from "./Time.svelte"
    import RoundProgress from "./RoundProgress.svelte"
    import WorkoutProgress from "./WorkoutProgress.svelte"

    import {exercises} from "../stores/exercises.js"
    import {running, elapsed} from "../stores/timer.js"

    export let exercise
</script>

<section
    class="grid grid-rows-stats h-full items-center text-center text-5xl
    text-black uppercase tracking-tighter">
    <WorkoutProgress round={$exercises[exercise].round} />

    <div>
        <Time time={$elapsed} blink={!$running && $elapsed} class="block" />

        <h2 class="font-body font-black">{$exercises[exercise].name}</h2>
        <RoundProgress exercise={$exercises[exercise].name} />
    </div>
</section>
