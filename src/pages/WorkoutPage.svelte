<script>
    import {fade} from "svelte/transition"

    import Details from "../components/Details.svelte"
    import Loading from "../components/Loading.svelte"

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

<main class="grid grid-rows-completed justify-center items-center pb-10" in:fade={{duration: 500}}>
    {#await workout}
        <Loading/>
    {:then workout}
        <Details exercises={workout.exercises} date={workout.date} />
    {/await}

</main>
