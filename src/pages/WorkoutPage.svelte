<script>
    import {fade} from "svelte/transition"

    import Details from "../components/Details.svelte"
    import Loading from "../components/Loading.svelte"

    import {user} from "../stores/user.js"

    export let params

    const getWorkout = async () => {
        const response = await fetch(`/api/read-workout/${params.id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${$user.token.access_token}`,
            },
        })

        // TODO: handle fetch error
        const {data} = await response.json()

        const workout = {
            ...data,
            date: Date.parse(data.date),
            exercises: JSON.parse(data.exercises),
        }

        return workout
    }

    const workout = getWorkout()
</script>

<main
    class="grid grid-rows-completed justify-center items-center pb-10"
    in:fade={{duration: 500}}>
    {#await workout}
        <Loading />
    {:then workout}
        <Details exercises={workout.exercises} date={workout.date} />
    {/await}
</main>
