<script>
    import {runs, rounds} from "../stores/settings.js"
    import {workout, completed} from "../stores/workout.js"

    $: {
        let progress

        if ($completed) {
            progress = 100
        } else {
            const exercise = $workout.find(e => !e.time)
            const totalRounds = $rounds + ($runs ? 2 : 0)
            progress = Math.round((exercise.round / totalRounds) * 100)
        }

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
