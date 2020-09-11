<script>
    import WorkoutSummary from "./WorkoutSummary.svelte"

    import {runs, rounds} from "../stores/settings.js"
</script>

<section>
    <h2 class="font-black items-center text-center text-5xl mb-4 uppercase tracking-tighter text-black font-body">
        let's go!
    </h2>

    <WorkoutSummary runs={$runs} rounds={$rounds}/>
</section>
