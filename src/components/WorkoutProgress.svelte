<script>
    import {workout, completed} from "../stores/workout.js"

    $: {
        let progress

        if ($completed) {
            progress = 100
        } else {
            const exercise = $workout.findIndex(e => !e.time)
            progress = Math.round(((exercise + 1) / $workout.length) * 100)
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
