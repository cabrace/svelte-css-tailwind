<script>
  import stew from '$lib/assets/stew.jpg';
  import noodles from '$lib/assets/noodles.jpg';
  import curry from '$lib/assets/curry.jpg';
  import SvgIcon from '$lib/components/SvgIcon.svelte'
  import {burger,clock, home, contact, about} from '$lib/components/AppIcons'
  import { onMount } from 'svelte';

  // DOMContentLoaded
  onMount(async () => {
    const burger = document.querySelector("#burger")
    const menu = document.querySelector("#menu")

    burger.addEventListener('click', () => {
      if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden")
      }else{
        menu.classList.add("hidden")
      }
    })

  });

</script>

<!-- content wrapper -->
<div class="grid md:grid-cols-3">
  <div class="col-span-1 md:flex md:justify-end">
    <nav class="text-right">
      <div class="flex justify-between items-center">
        <h1 class="font-bold uppercase p-4 border-b border-gray-100 font-serif">
          <a href="/" class="hover:text-gray-700">Food Ninja</a>
        </h1>
        <!-- hides for screens md or larger -->
        <div class="px-4 cursor-pointer md:hidden transition ease-out delay-1000" id="burger">
          <SvgIcon style="" d={burger} />
        </div>
      </div>
      <ul class="text-sm mt-6 text-sm mt-6 hidden md:block transition ease-out delay-1000" id="menu">
        <li class="text-gray-700 font-bold py-1">
          <a href="#" class="px-4 flex justify-end border-r-4 border-primary">
            <span>Home</span>
            <SvgIcon style="w-5 ml-2" d={home} />
          </a>
        </li>
        <li class="py-1">
          <a href="#" class="px-4 flex justify-end border-r-4 border-white">
            <span>About</span>
            <SvgIcon style="w-5 ml-2" d={about} />
          </a>
        </li>
        <li class="py-1">
          <a href="#" class="px-4 flex justify-end border-r-4 border-white">
            <span>Contact</span>
            <SvgIcon style="w-5 ml-2" d={contact} />
          </a>
        </li>
      </ul>
    </nav>
  </div>

  <main class="px-16 py-6 bg-gray-100 md:col-span-2">
    <div class="flex justify-center md:justify-end">
      <a href="#" class="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500 duration-800">Log in</a>
      <a href="#" class="btn text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-800">Sign up</a>
    </div>

    <header>
      <h2 class="text-gray-700 text-6xl font-semibold">Recipes</h2>
      <h3 class="text-2xl font-semibold">For Ninjas</h3>
    </header>

    <div>
      <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>

      <div class="card_continer grid lg:grid-cols-3 gap-10 ">

        <!-- cards go here -->
        <div class="card hover:shadow-xl hover:cursor-pointer">
          <img src={stew} alt="stew" class="w-full h-32 sm:h-48 object-cover"/>
          <div class="m-4">
            <span class="font-bold">5 Bean Chili Stew</span>
            <span class="block text-gray text-sm">Recipe by Mario</span>
          </div>
          <div class="badge">
            <SvgIcon d={clock} style="inline-block" />
            <span>
              25 mins
            </span>
          </div>
        </div>

        <div class="card hover:shadow-xl hover:cursor-pointer">
          <img src={noodles} alt="noodles" class="w-full h-32 sm:h-48 object-cover"/>
          <div class="m-4">
            <span class="font-bold">veg Noodles</span>
            <span class="block text-gray text-sm">Recipe by Mario</span>
          </div>
          <div class="badge">
            <SvgIcon d={clock} style="inline-block" />
            <span>
              25 mins
            </span>
          </div>
        </div>

        <div class="card hover:shadow-xl hover:cursor-pointer">
          <img src={curry} alt="curry" class="w-full h-32 sm:h-48 object-cover"/>
          <div class="m-4">
            <span class="font-bold">Tofu Curry</span>
            <span class="block text-gray text-sm">Recipe by Mario</span>
          </div>
          <div class="badge">
            <SvgIcon d={clock} style="inline-block" />
            <span>
              25 mins
            </span>
          </div>
        </div>

      </div>

      <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>

      <div class="mt-8">
        <!-- cards go here -->
      </div>
    </div>

    <div class="flex justify-center">
      <div class="btn bg-secondary-100 flex justify-center hover:shadow-inner transform hover:scale-125 transition ease-out delay-50 hover:bg-opacity-50" >Load more</div>
    </div>
  </main>
</div>
