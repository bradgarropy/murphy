<script>
    export let onCompleted

    let id
    let countdown = 3

    id = setInterval(() => {
        if (countdown === 1) {
            document.getElementById("start").play()
            clearInterval(id)
            onCompleted()
            return
        }

        document.getElementById("tick").play()
        countdown = countdown - 1
    }, 1000)

    document.getElementById("tick").play()
</script>

<div
    class="flex flex-row justify-center font-body font-medium gap-32 text-6xl leading-normal"
>
    <div
        class={`flex items-center justify-center w-32 h-32 text-white rounded-full border-solid border-white border-8 bg-red ${
            countdown > 3 && "invisible"
        }`}
    >
        3
    </div>

    <div
        class={`flex items-center justify-center w-32 h-32 -mx-40 text-white rounded-full border-solid border-white border-8 bg-yellow ${
            countdown > 2 && "invisible"
        }`}
    >
        2
    </div>

    <div
        class={`flex items-center justify-center w-32 h-32 text-white rounded-full border-solid border-white border-8 bg-green ${
            countdown > 1 && "invisible"
        }`}
    >
        1
    </div>
</div>
