<script lang="ts">
  import { LightSwitch, Drawer, drawerStore } from "@skeletonlabs/skeleton";
  import HamburgerIcon from "$lib/components/Icons/HamburgerIcon.svelte";
  import CloseIcon from "$lib/components/Icons/CloseIcon.svelte";
  import type { DrawerSettings } from "@skeletonlabs/skeleton";
  import NavigationLinks from "$lib/components/Navbar/NavigationLinks.svelte";

  const drawerSettings: DrawerSettings = {
    position: "left",
    blur: true,
  };
</script>

<Drawer {drawerSettings}>
  <div class="flex flex-col p-6 font-semibold text-xl">
    <div class="self-end">
      <button class="btn btn-icon" on:click={drawerStore.close}
        ><CloseIcon />
      </button>
    </div>
    <div class="flex flex-col h-full justify-between space-y-3">
      <NavigationLinks />
    </div>
  </div>
</Drawer>

<div
  class="container flex flex-wrap items-center justify-between mx-auto py-3 px-3 sm:w-full md:w-4/5 lg:w-3/5"
>
  <div class="sm:hidden">
    <button class="btn btn-icon" on:click={drawerStore.open}>
      <HamburgerIcon />
    </button>
  </div>
  <div class="links space-x-10 font-semibold text-xl hidden sm:flex">
    <NavigationLinks />
  </div>
  <div class="theme-switch">
    <LightSwitch bgLight="bg-surface-200" bgDark="bg-surface-500" ring="ring-[2px] ring-surface-500/30" />
  </div>
</div>
