<script>
    import {format} from "date-fns"
    import {Link} from "svelte-routing"
    import {fade} from "svelte/transition"

    import {user} from "../stores/user.js"

    import {USER_WORKOUTS_QUERY} from "../graphql/queries.js"

    const getWorkouts = async () => {
        const response = await fetch("/api/fauna", {
            method: "POST",
            body: JSON.stringify({
                query: USER_WORKOUTS_QUERY,
                variables: {email: $user.email},
            }),
        })

        // TODO: handle fetch error
        const res = await response.json()

        const workouts = res.data.findWorkoutsByEmail.data.map(workout => ({
            ...workout,
            _ts: workout._ts / 1000,
            exercises: JSON.parse(workout.exercises),
        }))

        return workouts
    }

    const workouts = getWorkouts()
</script>

<main in:fade={{duration: 500}}>
    {#await workouts}
        <p>loading</p>
    {:then workouts}
        {#each workouts as workout}
            <Link to={`/workout/${workout._id}`}>
                <p>{format(workout._ts, 'PPPpp')}</p>
            </Link>
        {/each}
    {/await}
</main>
