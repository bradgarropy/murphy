<script>
    import {format} from "date-fns"

    let className
    export {className as class}

    export let time
</script>

<time class="tracking-widest {className}">{format(time, 'mm:ss:SS')}</time>
