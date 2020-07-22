<script>
    import {elapsed} from "../stores/timer.js"

    export let onStop
</script>

<button
    on:click={onStop}
    disabled={!$elapsed}
    class="w-full disabled:bg-gray bg-red text-5xl text-white font-bold py-20
    font-body tracking-widest">
    STOP
</button>
