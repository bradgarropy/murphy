<script>
    import {onMount} from "svelte"
    import {format} from "date-fns"
    import {Link} from "svelte-routing"
    import {writable} from "svelte/store"
    import {fade} from "svelte/transition"

    import {user} from "../stores/user.js"

    import {USER_WORKOUTS_QUERY} from "../graphql/queries.js"

    const workouts = writable()

    onMount(async () => {
        const response = await fetch("/api/fauna", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${$user.token.access_token}`,
            },
            body: JSON.stringify({
                query: USER_WORKOUTS_QUERY,
                variables: {email: $user.email},
            }),
        })

        // TODO: handle fetch error
        const res = await response.json()

        const newWorkouts = res.data.findWorkoutsByEmail.data.map(workout => ({
            ...workout,
            _ts: workout._ts / 1000,
            exercises: JSON.parse(workout.exercises),
        }))

        workouts.set(newWorkouts)
    })
</script>

<main in:fade={{duration: 500}}>
    {#if !$workouts}
        <p>loading</p>
    {:else}
        {#each $workouts as workout}
            <Link to={`/workout/${workout._id}`}>
                <p>{format(workout._ts, 'PPPpp')}</p>
            </Link>
        {/each}
    {/if}
</main>
