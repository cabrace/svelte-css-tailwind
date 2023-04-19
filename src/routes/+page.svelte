<script>
  import stew from '$lib/assets/stew.jpg';
  import noodles from '$lib/assets/noodles.jpg';
  import curry from '$lib/assets/curry.jpg';
  import SvgIcon from '$lib/components/SvgIcon.svelte'
  import {burger,clock, home, contact, about} from '$lib/components/AppIcons'
  /* import { hello } from "./index.js" */
  import { onMount } from 'svelte';

  onMount(async () => {
      //Do stuff here
     /* console.log(hello) */
  });

</script>

<!-- content wrapper -->
<div class="md:flex lg:w-1/2 p-2">
  <div class="md:flex-1 rounded-sm shadow-lg text-gray-600 bg-white rounded-sm shadow-lg">
    <div class="overflow-hidden w-full flex leading-normal lg:h-full">
      <div class="sm:w-1/3 lg:w-1/4 bg-teal-600 flex items-center justify-center">
        <div class="text-center text-6xl font-bold text-white">1</div>
      </div>
      <p class="text-gray-600  sm:w-2/3 lg:w-3/4 p-4">This is TailwindCSS -- Rezise to see changes</p>
    </div>
  </div>
</div>

<style>
/* Page specific style goes here */
</style>
