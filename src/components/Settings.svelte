<script>
    import {runs, rounds} from "../stores/config.js"
</script>

<form>
    <label>run</label>
    <input type="checkbox" bind:checked={$runs} />

    <label>rounds</label>
    <input type="number" bind:value={$rounds} min="1" max="20" />
</form>
