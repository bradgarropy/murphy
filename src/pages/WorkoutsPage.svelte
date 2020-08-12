<script>
    import {format} from "date-fns"
    import {Link} from "svelte-routing"
    import {fade} from "svelte/transition"

    import Loading from "../components/Loading.svelte"

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
            date: Date.parse(workout.date),
            exercises: JSON.parse(workout.exercises),
        }))

        return workouts
    }

    const workouts = getWorkouts()
</script>

<main class="" in:fade={{duration: 500}}>
    <h2 class="text-center text-4xl uppercase font-header tracking-tighter pb-6">workouts</h2>

    {#await workouts}
        <Loading/>
    {:then workouts}
        <section class="grid content-start justify-center items-center pb-10 text-2xl text-black font-body font-black uppercase tracking-tighter">
            {#each workouts as workout}
                <Link to={`/workout/${workout._id}`}>
                    <p>{format(workout.date, "MMMM dd, y")}</p>
                </Link>
            {/each}
        </section>
    {/await}
</main>
