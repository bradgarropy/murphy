<script>
    export let exercise

    const exercises = ["pull ups", "push ups", "squats"]
    $: fill = exercises.findIndex(e => e === exercise)
</script>

<div
    class="grid grid-cols-round justify-center gap-x-4 {fill < 0 &&
        'invisible'}"
>
    {#each [1, 2, 3] as index}
        <div class="w-6 h-2 {fill >= index - 1 ? 'bg-green' : 'bg-silver'}" />
    {/each}
</div>
