<script>
    import {fly} from "svelte/transition"
    import {sineIn, sineOut} from "svelte/easing"
</script>

<div
    class="flex font-body text-black absolute tracking-tighter font-bold
    uppercase items-center col-gap-1 bg-white right-0 bottom-0 px-2 py-1
    rounded-tl-md"
    in:fly={{duration: 300, opacity: 1, y: 20, easing: sineOut}}
    out:fly={{duration: 300, opacity: 1, y: 20, easing: sineIn}}>
    <svg
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
            d="M8 17a5 5 0 01-.916-9.916 5.002 5.002 0 019.832 0A5.002 5.002 0
            0116 17m-7-5l3-3m0 0l3 3m-3-3v12" />
    </svg>

    <span>saving</span>
</div>
