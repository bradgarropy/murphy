<script>
    import {fade} from "svelte/transition"
    import netlifyIdentity from "netlify-identity-widget"

    import ListItem from "../components/ListItem.svelte"

    import {user} from "../stores/user.js"

    const refreshUser = async () => {
        const currentUser = await netlifyIdentity.currentUser()
        const userData = await currentUser.getUserData()
        user.set(userData)
    }

    refreshUser()
</script>

<main in:fade={{duration: 500}} class="font-body tracking-tighter">
    <h2 class="flex justify-center items-baseline text-black uppercase text-5xl my-6 tracking-tighter">
        <span class="font-black z-10 relative">you are a</span>
        <span class="font-header -ml-1 px-4 py-1 bg-yellow transform -skew-x-6">pro</span>
    </h2>

    <div class="grid justify-center gap-y-4 mb-10">
        <div>
            <p class="text-3xl font-bold">Now you can</p>
            <ul class="text-xl">
                <ListItem text="Save workouts"/>
                <ListItem text="View past workouts"/>
            </ul>
        </div>

        <div class="text-silver">
            <p class="text-3xl font-bold">Coming soon</p>
            <ul class="text-xl">
                <ListItem text="Track your best times"/>
            </ul>
        </div>
    </div>

    <h3 class="text-2xl uppercase font-black tracking-tighter text-center">thank you for your support!</h3>
</main>
