<script>
    import {format} from "date-fns"
    import Time from "./Time.svelte"
    import Round from "./Round.svelte"

    export let date = null
    export let exercises

    const rounds = exercises.reduce((acc, curr) => {
        const index = acc.findIndex(e => e.number === curr.round)

        if (curr.round && index >= 0) {
            acc[index].time += curr.time

            acc[index].exercises.push({
                name: curr.name,
                time: curr.time,
            })
        } else {
            acc.push({
                number: curr.round,
                time: curr.time,
                exercises: [{
                    name: curr.name,
                    time: curr.time,
                }],
            })
        }

        return acc
    }, [])

    const elapsed = exercises.reduce((acc, curr) => acc + curr.time, 0)
</script>

<h2 class="text-center text-4xl uppercase font-header tracking-tighter">
    {date ? format(date, "MMMM dd, y") : "completed"}
</h2>

<Time time={elapsed} />

<div class="overflow-y-scroll h-full">
    {#each rounds as round}
        <Round {round} />
    {/each}
</div>
