<script>
    import Time from "./Time.svelte"
    import Round from "./Round.svelte"

    import {elapsed} from "../stores/timer.js"

    export let workout

    const rounds = workout.reduce((acc, curr) => {
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

    $: {
        console.log(workout)
        console.log(rounds)
    }
</script>

<h2 class="text-center text-4xl uppercase font-header tracking-tighter">
    completed
</h2>

<Time time={$elapsed} />

<div class="overflow-y-scroll h-full">
    {#each rounds as round}
        <Round {round} />
    {/each}
</div>
