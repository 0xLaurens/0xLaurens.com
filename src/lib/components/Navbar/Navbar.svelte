<script lang="ts">
  import {
    LightSwitch,
    Drawer,
    drawerStore,
    modeCurrent,
  } from "@skeletonlabs/skeleton";
  import HamburgerIcon from "$lib/components/Icons/HamburgerIcon.svelte";
  import CloseIcon from "$lib/components/Icons/CloseIcon.svelte";
  import type { DrawerSettings } from "@skeletonlabs/skeleton";
  import NavigationLinks from "$lib/components/Navbar/NavigationLinks.svelte";

  let drawerSettings: DrawerSettings = {
    position: "left",
    blur: "true",
  };
  $: drawerSettings.bgDrawer = $modeCurrent ? "bg-slate-100" : "";
</script>

<Drawer {drawerSettings}>
  <div class="flex flex-col p-6 font-semibold text-xl">
    <div class="self-end">
      <button class="btn btn-icon" on:click={drawerStore.close}
        ><CloseIcon />
      </button>
    </div>
    <div class="flex flex-col h-full justify-between space-y-6">
      <NavigationLinks />
    </div>
  </div>
</Drawer>

<div
  class="container flex flex-wrap items-center justify-between py-3 px-6 md:px-0 mx-auto"
>
  <button
    class="btn btn-icon sm:hidden"
    on:click={() => drawerStore.open(drawerSettings)}
  >
    <HamburgerIcon />
  </button>
  <a class="text-2xl sm:text-3xl lg:text-4xl font-extrabold" href="/">
    0xLaurens
  </a>
  <div
    class:!text-light-tertiary={$modeCurrent}
    class="links space-x-10 text-tertiary-500 text-md lg:text-xl hidden sm:flex"
  >
    <NavigationLinks />
  </div>
  <LightSwitch
    bgLight="bg-slate-100"
    bgDark="bg-surface-500"
    ring="ring-[2px] ring-surface-500/30"
  />
</div>
