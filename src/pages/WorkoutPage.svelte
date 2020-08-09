<script>
    import {fade} from "svelte/transition"

    import Details from "../components/Details.svelte"

    import {WORKOUT_QUERY} from "../graphql/queries.js"

    export let params

    const getWorkout = async () => {
        const response = await fetch("/api/fauna", {
            method: "POST",
            body: JSON.stringify({
                query: WORKOUT_QUERY,
                variables: {id: params.id},
            }),
        })

        // TODO: handle fetch error
        const res = await response.json()

        const workout = res.data.findWorkoutByID
        workout.date = Date.parse(workout.date)
        workout.exercises = JSON.parse(workout.exercises)

        return workout
    }

    const workout = getWorkout()
</script>

<main in:fade={{duration: 500}}>
    {#await workout}
        <p>loading</p>
    {:then workout}
        <Details workout={workout.exercises} />
    {/await}

</main>
