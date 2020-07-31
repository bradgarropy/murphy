<script>
    import {navigate} from "svelte-routing"

    import Time from "./Time.svelte"
    import Redirect from "./Redirect.svelte"

    import {elapsed, reset} from "../stores/timer.js"

    const onDetails = () => {
        navigate("/details")
    }

    const onReset = () => {
        reset()
        navigate("/")
    }
</script>

{#if !$elapsed}
    <Redirect to="/" />
{:else}
    <main class="grid grid-rows-completed justify-center items-center pb-10">
        <h2 class="text-center text-4xl uppercase font-header tracking-tighter">
            completed
        </h2>

        <Time time={$elapsed} />

        <div class="grid grid-rows-2 gap-10 justify-center text-xl">
            <button
                on:click={onDetails}
                class="w-64 h-20 bg-green text-white font-bold font-body
                uppercase ">
                details
            </button>

            <button
                on:click={onReset}
                class="w-64 h-20 bg-red text-white font-bold font-body uppercase
                ">
                reset
            </button>
        </div>
    </main>
{/if}
