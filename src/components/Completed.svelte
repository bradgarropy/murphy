<script>
    import Time from "./Time.svelte"

    import {elapsed} from "../stores/timer.js"
</script>

<h2 class="text-center text-4xl uppercase font-header tracking-tighter">
    completed
</h2>

<Time time={$elapsed} />
