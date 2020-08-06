<script>
    import {format} from "date-fns"
    import {writable} from "svelte/store"

    import {workout} from "../stores/workout.js"
    import {exercises} from "../stores/exercises.js"
    import {runs, rounds} from "../stores/settings.js"

    import {getRoundLabel} from "../utils/utils.js"

    export let round

    const expanded = writable(false)

    const workoutExercises = $workout.filter(
        exercise => exercise.round === round.number,
    )

    const onClick = () => expanded.set(!$expanded)
</script>

<div class="grid grid-cols-2 text-xl uppercase" on:click={onClick}>
    <span class="tracking-tighter font-bold">
        {getRoundLabel(round.number, $runs, $rounds, $exercises)}
    </span>

    <span class="tracking-widest text-right">
        {format(round.time, 'mm:ss:SS')}
    </span>

    {#if $expanded}
        <div class="grid grid-cols-2 text-xl uppercase col-span-2 py-2">
            {#each workoutExercises as exercise}
                <span class="tracking-tighter font-bold pl-4">
                    {exercise.name}
                </span>

                <span class="tracking-widest text-right">
                    {format(exercise.time, `mm:ss:SS`)}
                </span>
            {/each}
        </div>
    {/if}
</div>
