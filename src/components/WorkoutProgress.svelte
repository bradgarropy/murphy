<script>
    import {runs, rounds} from "../stores/settings.js"

    export let round

    $: {
        const totalRounds = $rounds + ($runs ? 2 : 0)
        const progress = Math.round((round / totalRounds) * 100)

        document.documentElement.style.setProperty(
            "--percentage",
            `${progress}%`,
        )
    }
</script>

<style>
    :root {
        --percentage: 0%;
    }

    .progress {
        width: var(--percentage);
    }
</style>

<div class="w-11/12 h-2 mx-auto bg-silver">
    <div class="progress bg-green h-full" />
</div>
