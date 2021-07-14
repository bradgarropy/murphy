<script>
    import {format} from "date-fns"

    import Round from "./Round.svelte"
    import Time from "./Time.svelte"
    import WorkoutSummary from "./WorkoutSummary.svelte"

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
                exercises: [
                    {
                        name: curr.name,
                        time: curr.time,
                    },
                ],
            })
        }

        return acc
    }, [])

    const elapsed = exercises.reduce((acc, curr) => acc + curr.time, 0)
    const runs = exercises[0].name === "1 mile run"
    const numRounds = exercises[exercises.length - 2].round
</script>

<div class="grid gap-y-10">
    <h2 class="text-center text-4xl uppercase font-header tracking-tighter">
        {date ? format(date, "MMMM dd, y") : "completed"}
    </h2>

    <div class="text-center">
        <WorkoutSummary {runs} rounds={numRounds} />
        <Time time={elapsed} />
    </div>

    <div class="grid gap-y-2">
        {#each rounds as round}
            <Round {round} />
        {/each}
    </div>
</div>
