<script>
    import {runs, rounds} from "../stores/config.js"
</script>

<form
    class="text-6xl text-black font-body font-black uppercase tracking-tighter
    grid grid-rows-settings items-center">
    <div
        class="grid grid-cols-form grid-rows-2 col-gap-8 px-16 justify-center
        content-center items-center">
        <input
            type="checkbox"
            id="runs"
            bind:checked={$runs}
            class="w-full transform scale-500" />
        <label for="runs">run</label>

        <input
            type="number"
            id="rounds"
            bind:value={$rounds}
            min="1"
            max="20"
            class="text-center" />
        <label for="rounds">rounds</label>
    </div>

    <button
        class="w-full h-full bg-green text-5xl text-white font-bold font-body
        uppercase">
        save
    </button>
</form>
