<script>
    import {format} from "date-fns"
    import {cubicOut} from "svelte/easing"
    import {writable} from "svelte/store"
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
    class={`grid grid-cols-2 text-xl uppercase font-body ${
        round.number ? "cursor-pointer" : "cursor-default"
    }`}
    on:click={onClick}
>
    <div class="flex items-center">
        <svg
            class={`w-6 h-6 transition-transform ease-out duration-500 transform ${
                $expanded && "rotate-90"
            } ${!round.number && "invisible"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
            />
        </svg>

        <span class="tracking-tighter font-bold">{getRoundLabel(round)}</span>
    </div>

    <span class="tracking-widest text-right">
        {format(round.time, "mm:ss:SS")}
    </span>

    {#if $expanded}
        <div
            class="grid grid-cols-2 text-xl uppercase col-span-2 py-2"
            transition:slide={{duration: 500, easing: cubicOut}}
        >
            {#each round.exercises as exercise}
                <span class="tracking-tighter font-bold pl-10">
                    {exercise.name}
                </span>

                <span class="tracking-widest text-right">
                    {format(exercise.time, "mm:ss:SS")}
                </span>
            {/each}
        </div>
    {/if}
</div>
