<script>
    import {Link} from "svelte-routing"
</script>

<header class="bg-yellow relative text-black">
    <Link to="/">
        <h1
            class="text-center text-5xl p-6 uppercase font-header
            tracking-tighter">
            murphy
        </h1>
    </Link>

    <Link to="/settings" aria-label="settings">
        <svg
            class="absolute right-20 top-middle transform -translate-y-1/2
            fill-current"
            width="64px"
            height="64px"
            viewBox="0 0 20 20">
            <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0
                01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061
                2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0
                01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0
                012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0
                012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0
                01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0
                01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0
                01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd" />
        </svg>
    </Link>
</header>
