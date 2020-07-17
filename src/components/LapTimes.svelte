<script>
    import Time from "./Time.svelte"

    export let times = []
</script>

{#each [...times].reverse() as time, i}
    <p>
        <span>{times.length - i}</span>
        <Time {time} />
    </p>
{/each}
