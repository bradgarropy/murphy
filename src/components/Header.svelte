<script>
    import {Link} from "svelte-routing"

    import {user} from "../stores/user.js"
</script>

<header class="bg-yellow relative text-black p-6 flex justify-between">
    <Link to="/">
        <h1 class="text-2xl uppercase font-header tracking-tighter">murphy</h1>
    </Link>

    <nav class="flex gap-x-2">
        {#if $user}
            <Link to="/workouts">
                <svg
                    fill="currentColor"
                    width="36px"
                    height="36px"
                    viewBox="0 0 20 20">
                    <path
                        fill-rule="evenodd"
                        d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2
                        0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293
                        4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586
                        14.586 7H12z"
                        clip-rule="evenodd" />
                </svg>
            </Link>
        {/if}

        <Link to="/settings">
            <svg
                class="fill-current"
                width="36px"
                height="36px"
                viewBox="0 0 20 20"
                aria-label="settings"
            >
                <path
                    fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0
                    01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061
                    2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0
                    01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0
                    012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0
                    012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0
                    01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0
                    01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532
                    0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd" />
            </svg>
        </Link>

        <Link to="/account">
            <svg
                class="fill-current"
                width="36px"
                height="36px"
                viewBox="0 0 20 20"
                aria-label="account"
            >
                <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2
                    0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010
                    16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clip-rule="evenodd" />
            </svg>
        </Link>
    </nav>
</header>
