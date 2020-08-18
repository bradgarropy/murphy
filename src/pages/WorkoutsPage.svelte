<script>
    import {format} from "date-fns"
    import {Link} from "svelte-routing"
    import {fade} from "svelte/transition"

    import Loading from "../components/Loading.svelte"

    import {user} from "../stores/user.js"

    const getWorkouts = async () => {
        const response = await fetch("/api/workout", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${$user.token.access_token}`,
            },
        })

        // TODO: handle fetch error
        const {data} = await response.json()

        const workouts = data.map(workout => ({
            ...workout.data,
            date: Date.parse(workout.data.date),
            exercises: JSON.parse(workout.data.exercises),
        }))

        console.log(workouts)

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
