<script>
    export let runs
    export let rounds
</script>

<div
    class="grid grid-cols-workout gap-x-5 text-xl leading-normal text-black justify-center font-body font-bold uppercase tracking-tighter"
>
    {#if runs}
        <span class="justify-self-end">1</span>
        <span class="justify-self-start">mile run</span>
    {/if}

    <span class="justify-self-end">{rounds * 5}</span>
    <span class="justify-self-start">pull ups</span>

    <span class="justify-self-end">{rounds * 10}</span>
    <span class="justify-self-start">push ups</span>

    <span class="justify-self-end">{rounds * 15}</span>
    <span class="justify-self-start">squats</span>

    {#if runs}
        <span class="justify-self-end">1</span>
        <span class="justify-self-start">mile run</span>
    {/if}
</div>
