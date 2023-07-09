<script lang="ts">
  import { LightSwitch } from "@skeletonlabs/skeleton";
</script>

<div
  class="container flex flex-wrap items-center justify-between mx-auto py-3 px-3 md:px-0 sm:w-full md:w-4/5 lg:w-3/5"
>
  <div class="links space-x-10 font-semibold text-xl hidden sm:flex">
    <a class="link link-hover" href="/">Home</a>
    <a class="link link-hover" href="/Projects">Projects</a>
  </div>
  <div class="theme-switch self-end">
    <LightSwitch />
  </div>
</div>
