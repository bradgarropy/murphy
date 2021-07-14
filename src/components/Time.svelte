<script>
    import {format} from "date-fns"

    let className = ""
    export {className as class}

    export let time
    export let blink = false
</script>

<time class="font-body tracking-widest text-6xl {blink && 'blink'} {className}">
    {format(time, "mm:ss:SS")}
</time>

<style>
    .blink {
        animation: blink-animation 1s steps(4, start) infinite;
    }

    @keyframes blink-animation {
        to {
            visibility: hidden;
        }
    }
</style>
