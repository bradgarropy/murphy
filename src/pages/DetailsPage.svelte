<script>
    import {fade} from "svelte/transition"

    import Details from "../components/Details.svelte"
    import Redirect from "../components/Redirect.svelte"

    import {laps} from "../stores/timer.js"
    import {workout} from "../stores/workout.js"
</script>

<svelte:head>
    <title>MURPHY | details</title>
</svelte:head>

<main
    class="grid grid-rows-details justify-center items-center pb-10"
    in:fade={{duration: 500}}>
    {#if !$laps[0].time}
        <Redirect to="/" />
    {:else}
        <Details exercises={$workout} />
    {/if}
</main>
