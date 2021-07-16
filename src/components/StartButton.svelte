<script>
    import {completed} from "../stores/workout.js"

    export let onStart
</script>

<button
    on:click={onStart}
    disabled={$completed}
    class="w-full h-full bg-green disabled:bg-gray disabled:cursor-default text-5xl leading-normal text-white font-bold
    font-body uppercase"
>
    start
</button>
