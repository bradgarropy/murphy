<script>
    import {elapsed} from "../stores/timer.js"

    export let onStop
</script>

<button
    on:click={onStop}
    disabled={!$elapsed}
    class="w-full h-full disabled:bg-gray disabled:cursor-default bg-red text-2xl leading-normal text-white font-bold
    font-body uppercase"
>
    stop
</button>
