<script>
    import {format} from "date-fns"

    let id
    let start
    let elapsed = 0

    const startTimer = () => {
        start = Date.now()
        id = setInterval(() => (elapsed = Date.now() - start), 100)
    }

    const stopTimer = () => clearInterval(id)

    const resetTimer = () => {
        start = Date.now()
        elapsed = 0
    }
</script>

<div>
    <h1>Murph Tracker</h1>

    <pre>{format(elapsed, 'mm:ss:SS')}</pre>

    <button on:click={startTimer}>START</button>
    <button on:click={stopTimer}>STOP</button>
    <button on:click={resetTimer}>RESET</button>
</div>
