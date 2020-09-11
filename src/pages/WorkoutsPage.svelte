<script>
    import {format} from "date-fns"
    import {Link} from "svelte-routing"
    import {fade} from "svelte/transition"

    import Loading from "../components/Loading.svelte"

    import {user} from "../stores/user.js"

    const getWorkouts = async () => {
        const response = await fetch("/api/read-workouts", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${$user.token.access_token}`,
            },
        })

        // TODO: handle fetch error
        const {data} = await response.json()

        const workouts = data.map(workout => ({
            ...workout.data,
            id: workout.ref["@ref"].id,
            date: Date.parse(workout.data.date),
            exercises: JSON.parse(workout.data.exercises),
        }))

        return workouts
    }

    const promise = getWorkouts()
</script>

<main class="text-black" in:fade={{duration: 500}}>
    <h2 class="text-center text-4xl uppercase font-header tracking-tighter pb-6">workouts</h2>

    {#await promise}
        <Loading/>
    {:then workouts}
        <section class="grid content-start justify-center items-center pb-10 text-2xl font-body font-black uppercase tracking-tighter">
            {#each workouts as workout}
                <Link to={`/workout/${workout.id}`}>
                    <p>{format(workout.date, "MMMM dd, y")}</p>
                </Link>
            {/each}
        </section>
    {/await}
</main>
