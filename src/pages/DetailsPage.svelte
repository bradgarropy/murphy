<script>
    import {writable} from "svelte/store"
    import {fade} from "svelte/transition"
    import {navigate} from "svelte-routing"

    import Time from "../components/Time.svelte"
    import Round from "../components/Round.svelte"
    import Redirect from "../components/Redirect.svelte"

    import {workout} from "../stores/workout.js"
    import {elapsed, laps} from "../stores/timer.js"

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
</script>

{#if !$laps[0].time}
    <Redirect to="/" />
{:else}
    <main
        class="grid grid-rows-details justify-center items-center pb-10"
        in:fade={{duration: 500}}>
        <h2 class="text-center text-4xl uppercase font-header tracking-tighter">
            completed
        </h2>

        <Time time={$elapsed} />

        <div class="overflow-y-scroll h-full">
            {#each roundTimes as round}
                <Round {round} />
            {/each}
        </div>
    </main>
{/if}
