<script>
    import {exercises} from "../stores/exercises.js"
    import Time from "./Time.svelte"

    export let times = []
</script>

{#each [...times].reverse() as time, i}
    <p>
        <span>{times.length - i}</span>
        <span>{$exercises[times.length - i - 1].name}</span>
        <Time {time} />
    </p>
{/each}
