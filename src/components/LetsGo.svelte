<script>
    import {runs, rounds} from "../stores/settings.js"
</script>

<section class="text-center text-black font-body uppercase tracking-tighter">
    <h2 class="font-black items-center text-5xl mb-4">
        let's go!
    </h2>

    <div class="grid grid-cols-workout gap-x-5 text-2xl justify-center font-bold">
        {#if $runs}
        <span class="justify-self-end">1</span>
        <span class="justify-self-start">mile run</span>
        {/if}

        <span class="justify-self-end">{$rounds * 5}</span>
        <span class="justify-self-start">pull ups</span>

        <span class="justify-self-end">{$rounds * 10}</span>
        <span class="justify-self-start">push ups</span>

        <span class="justify-self-end">{$rounds * 15}</span>
        <span class="justify-self-start">squats</span>

        {#if $runs}
        <span class="justify-self-end">1</span>
        <span class="justify-self-start">mile run</span>
        {/if}
    </div>
</section>
