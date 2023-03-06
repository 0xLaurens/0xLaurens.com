<script>
    import "$lib/global.css";
    import Navbar from "$lib/components/Navbar/Navbar.svelte";
</script>

<Navbar />
<div class="flex flex-col h-screen justify-center items-center">
    <div class="mx-auto px-3 md:px-0 sm:w-full md:w-4/5 lg:w-3/5">
        <slot />
    </div>
</div>
