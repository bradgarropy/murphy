<script>
    import {fade} from "svelte/transition"
    import {navigate} from "svelte-routing"

    import {rounds, runs, save} from "../stores/settings.js"

    const onSubmit = () => {
        save()
        navigate("/")
    }
</script>

<svelte:head>
    <title>MURPHY | settings</title>
</svelte:head>

<form
    in:fade={{duration: 500}}
    on:submit|preventDefault={onSubmit}
    class="text-5xl text-black font-body font-black uppercase tracking-tighter
        grid grid-rows-settings gap-y-4 items-center"
>
    <div class="grid grid-cols-form justify-center content-center items-center">
        <input
            type="checkbox"
            id="runs"
            bind:checked={$runs}
            class="w-full transform scale-300"
        />
        <label for="runs">run</label>

        <input
            type="number"
            id="rounds"
            bind:value={$rounds}
            min="1"
            max="20"
            class="text-center"
        />
        <label for="rounds">rounds</label>
    </div>

    <button
        class="w-full h-full bg-green text-2xl text-white font-bold font-body
            uppercase"
    >
        save
    </button>
</form>
