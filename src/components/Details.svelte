<script>
    import {format} from "date-fns"
    import {onMount} from "svelte"
    import {navigate} from "svelte-routing"

    import Time from "./Time.svelte"
    import Redirect from "./Redirect.svelte"

    import {workout} from "../stores/workout.js"
    import {elapsed, laps} from "../stores/timer.js"
    import {exercises} from "../stores/exercises.js"
    import {runs, rounds} from "../stores/settings.js"

    const roundTimes = $workout.reduce((acc, curr) => {
        const index = acc.findIndex(e => e.number === curr.round)

        if (index > 0) {
            acc[index].time += curr.time
        } else {
            acc.push({
                number: curr.round,
                time: curr.time,
            })
        }

        return acc
    }, [])

    const getRoundLabel = number => {
        if ((number === 1 || number === $rounds + 2) && $runs) {
            return $exercises[0].name
        }

        return `Round ${number - 1}`
    }
</script>

{#if !$laps[0].time}
    <Redirect to="/" />
{:else}
    <main class="grid grid-rows-details justify-center items-center pb-10">
        <h2 class="text-center text-4xl uppercase font-header tracking-tighter">
            completed
        </h2>

        <Time time={$elapsed} />

        <div class="overflow-y-scroll h-full">
            {#each roundTimes as roundTime, index}
                <div class="flex justify-between text-xl uppercase">
                    <span class="tracking-tighter font-bold">
                        {getRoundLabel(roundTime.number)}
                    </span>

                    <span class="tracking-widest">
                        {format($laps[index].time, 'mm:ss:SS')}
                    </span>
                </div>
            {/each}
        </div>
    </main>
{/if}
