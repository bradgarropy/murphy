<script>
    export let onStart
    export let onStop
    export let ticking
</script>

{#if !ticking}
    <button on:click={onStart}>START</button>
{:else}
    <button on:click={onStop}>STOP</button>
{/if}
