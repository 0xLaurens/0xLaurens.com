<script lang="ts">
  import { LightSwitch } from "@skeletonlabs/skeleton";
  import HamburgerIcon from "$lib/components/Icons/HamburgerIcon.svelte";
</script>

<div
  class="container flex flex-wrap items-center justify-between mx-auto py-3 px-3 sm:w-full md:w-4/5 lg:w-3/5"
>
  <div class="sm:hidden">
    <button class="btn btn-icon">
      <HamburgerIcon />
    </button>
  </div>
  <div class="links space-x-10 font-semibold text-xl hidden sm:flex">
    <a class="link hover:underline" href="/">Home</a>
    <a class="link hover:underline" href="/Projects">Projects</a>
  </div>
  <div class="theme-switch">
    <LightSwitch />
  </div>
</div>
