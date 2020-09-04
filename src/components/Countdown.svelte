<script>
    export let onCompleted

    let id
    let countdown = 3

    id = setInterval(() => {
        if (countdown === 1) {
            clearInterval(id)
            onCompleted()
            return
        }

        countdown = countdown - 1
    }, 1000)
</script>

<p class="text-7xl">{countdown}</p>
