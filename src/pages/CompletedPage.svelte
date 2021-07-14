<script>
    import {fade} from "svelte/transition"
    import {navigate} from "svelte-routing"

    import Redirect from "../components/Redirect.svelte"
    import Time from "../components/Time.svelte"
    import {elapsed, resetTimer} from "../stores/timer"
    import {user} from "../stores/user.js"
    import {resetWorkout} from "../stores/workout"

    const onDetails = () => {
        navigate("/details")
    }

    const onReset = () => {
        resetTimer()
        resetWorkout()
        navigate("/")
    }

    const onSignup = () => {
        navigate("/signup")
    }
</script>

<svelte:head>
    <title>MURPHY | completed</title>
</svelte:head>

{#if !$elapsed}
    <Redirect to="/" />
{:else}
    <main
        class="grid grid-rows-completed justify-items-center items-center pb-10"
        in:fade={{duration: 500}}>
        <h2 class="text-center text-4xl uppercase font-header tracking-tighter">
            completed
        </h2>

        <Time time={$elapsed} />

        <div class="grid grid-rows-2 gap-6 items-center justify-items-center">
            <button
                on:click={onDetails}
                class="w-64 h-20 bg-green text-white text-2xl font-bold
                font-body uppercase ">
                details
            </button>

            <button
                on:click={onReset}
                class="w-64 h-20 bg-red text-white text-2xl font-bold font-body
                uppercase ">
                reset
            </button>

        </div>

        {#if !$user}
            <div class="flex flex-col items-center text-black text-2xl">
                <p class="font-body font-black uppercase tracking-tighter z-10 relative">save your workout</p>
                <button on:click={onSignup} class="font-header uppercase tracking-tighter px-4 py-1 bg-yellow transform -skew-x-6">signup</button>
            </div>
        {/if}
    </main>
{/if}
