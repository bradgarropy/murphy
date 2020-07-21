<script>
    import {elapsed} from "../stores/timer.js"

    export let onStop
</script>

<button
    on:click={onStop}
    disabled={!$elapsed}
    class="w-full bg-red text-5xl text-white font-bold h-32 font-body">
    STOP
</button>
