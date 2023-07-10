<script>
  import "@skeletonlabs/skeleton/themes/theme-skeleton.css";
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  import "../app.postcss";
  import "$lib/global.css";

  import Navbar from "$lib/components/Navbar/Navbar.svelte";
  import { AppShell } from "@skeletonlabs/skeleton";
</script>

<AppShell>
  <svelte:fragment slot="header">
    <Navbar />
  </svelte:fragment>
  <div class="grid grid-cols-12 mt-16">
    <slot />
  </div>
</AppShell>
