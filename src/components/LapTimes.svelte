<script>
    import Time from "./Time.svelte"

    export let times = []
    export let exercises = []
</script>

{#each [...times].reverse() as time, i}
    <p>
        <span>{times.length - i}</span>
        <span>{exercises[times.length - i - 1]}</span>
        <Time {time} />
    </p>
{/each}
