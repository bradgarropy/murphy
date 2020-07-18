<script>
    export let onStart
    export let onStop
    export let running
</script>

{#if !running}
    <button on:click={onStart}>START</button>
{:else}
    <button on:click={onStop}>STOP</button>
{/if}
