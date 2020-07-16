<script>
    import {format} from "date-fns"

    export let time
</script>

<p>{format(time, 'mm:ss:SS')}</p>
