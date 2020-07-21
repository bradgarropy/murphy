<script>
    import {format} from "date-fns"

    let className
    export {className as class}

    export let time
</script>

<time class="text-center text-6xl {className}">{format(time, 'mm:ss:SS')}</time>
