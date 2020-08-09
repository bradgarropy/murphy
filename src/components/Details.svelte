<script>
    import {format} from "date-fns"
    import Time from "./Time.svelte"
    import Round from "./Round.svelte"

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

    const elapsed = workout.reduce((acc, curr) => acc + curr.time, 0)
</script>

<h2 class="text-center text-4xl uppercase font-header tracking-tighter">
    {workout.date ? format(workout.date, 'PPPpp') : 'completed'}
</h2>

<Time time={elapsed} />

<div class="overflow-y-scroll h-full">
    {#each rounds as round}
        <Round {round} />
    {/each}
</div>
