<script>
    import {format} from "date-fns"

    export let time
</script>

<span>{format(time, 'mm:ss:SS')}</span>
