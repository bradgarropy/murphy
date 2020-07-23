<script>
    import {format} from "date-fns"
    import {onDestroy} from "svelte"

    let className
    export {className as class}

    export let time
    export let blink
</script>

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

<time class="tracking-widest {blink && 'blink'} {className}">
    {format(time, 'mm:ss:SS')}
</time>
