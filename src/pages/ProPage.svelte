<script>
      import {fade} from "svelte/transition"
      import netlifyIdentity from "netlify-identity-widget"

      import {user} from "../stores/user"

      import {checkout} from "../utils/stripe"

      const onGoPro = async () => {
          if(!$user) {
              netlifyIdentity.open("signup")
              return
          }

          checkout($user.email)
      }
</script>

<svelte:head>
    <title>MURPHY | pro</title>
</svelte:head>

<main in:fade={{duration: 500}} class="-mt-4 flex flex-col items-center text-black">
    <img src="/push-ups.jpg" alt="push up" class="z-0" />

    <section class="flex flex-col items-center z-10 relative bg-white -mt-12 mb-24 transform -skew-x-3 uppercase shadow-2xl">
        <div class="flex flex-col gap-y-4 items-center px-10 py-6 transform skew-x-3">
            <h1 class="flex flex-col items-center tracking-tighter">
                <p class="text-3xl">pro access</p>

                <p class="font-header text-4xl relative">
                    <span class="text-2xl absolute -ml-4">$</span>
                    <span>1</span>
                </p>
            </h1>

            <ul class="flex flex-col gap-y-3 text-xl tracking-tighter">
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
        </div>

        <button on:click={onGoPro} class="font-header w-full px-6 py-1 bg-yellow text-5xl uppercase tracking-tighter">buy now</button>
    </section>

</main>
