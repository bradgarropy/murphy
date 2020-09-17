<script>
    import {fade} from "svelte/transition"
    import netlifyIdentity from "netlify-identity-widget"

    import ListItem from "../components/ListItem.svelte"

    import {user} from "../stores/user.js"

    const refreshUser = async () => {
        const currentUser = await netlifyIdentity.currentUser()

        if(!currentUser) {
            return
        }

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
        <section>
            <h3 class="text-3xl font-bold">Now you can</h3>

            <ul class="flex flex-col gap-y-2 text-xl tracking-tighter uppercase">
                <li class="flex gap-x-3 items-center">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <span>save workouts</span>
                </li>

                <li class="flex gap-x-3 items-center">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"></path></svg>
                    <span>view past workouts</span>
                </li>

                <li class="flex gap-x-3 items-center">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
                    <span>scale workouts</span>
                </li>

                <li class="flex gap-x-3 items-center">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                    <span>view round breakdowns</span>
                </li>
            </ul>
        </section>

        <section class="text-silver">
            <h3 class="text-3xl font-bold">Coming soon</h3>

            <ul class="flex flex-col gap-y-2 text-xl tracking-tighter uppercase">
                <li class="flex col-gap-3 items-center">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                    <span>track your best times</span>
                </li>
            </ul>
        </section>
    </div>

    <h3 class="text-2xl uppercase font-black tracking-tighter text-center">thank you for your support!</h3>
</main>
