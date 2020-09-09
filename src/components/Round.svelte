<script>
    import {format} from "date-fns"
    import {writable} from "svelte/store"
    import {cubicOut} from "svelte/easing"
    import {slide} from "svelte/transition"

    import {getRoundLabel} from "../utils/utils.js"

    export let round

    const expanded = writable(false)

    const onClick = () => {
        if (round.exercises.length > 1) {
            expanded.set(!$expanded)
        }
    }
</script>

<div
    class="grid grid-cols-2 text-xl uppercase font-body cursor-pointer"
    on:click={onClick}>
    <span class="tracking-tighter font-bold"> {getRoundLabel(round)} </span>

    <span class="tracking-widest text-right">
        {format(round.time, 'mm:ss:SS')}
    </span>

    {#if $expanded}
        <div
            class="grid grid-cols-2 text-xl uppercase col-span-2 py-2"
            transition:slide={{duration: 500, easing: cubicOut}}>
            {#each round.exercises as exercise}
                <span class="tracking-tighter font-bold pl-4">
                    {exercise.name}
                </span>

                <span class="tracking-widest text-right">
                    {format(exercise.time, 'mm:ss:SS')}
                </span>
            {/each}
        </div>
    {/if}
</div>
