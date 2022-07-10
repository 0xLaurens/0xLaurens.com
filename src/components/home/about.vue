<template>
    <div class="hero mx-auto min-h-screen font font-custom">
        <div class="hero-content flex-col lg:flex-row">
            <div class="md:max-w-xl">
                <p class="py-6 text-black font-light text-3xl leading-relaxed">
                    I'm a <span class="underline">fullstack developer</span> based in the
                    Netherlands. Currently studying Computer science at Avans University of applied
                    sciences.
                </p>
            </div>
            <img src="../../assets/about.svg" class="mx-auto lg:max-w-md 4xl:max-w-lg rounded-lg" />
        </div>
    </div>
    <div class="flex min-h-screen font-custom justify-center content-center">
        <div class="grid grid-cols-3 grid-flow-row px-5 md:px-16 gap-y-4 self-center">
            <div class="col-span-3 rounded-lg">
                <h1 class="text-black text-5xl font-bold">
                    About.
                    <div class="line w-32" />
                </h1>
            </div>

            <div class="col-span-3 md:col-span-2 row-span-2 rounded-lg">
                <p class="py-6 text-black font-light text-3xl leading-relaxed">
                    I'm a <span class="underline">fullstack developer</span> based in the
                    Netherlands. Currently studying Computer science at Avans University of applied
                    sciences.
                </p>
            </div>

            <div class="col-span-2 md:col-span-1 row-span-3 md:row-span-2 z-50">
                <img
                    src="../../assets/about.svg"
                    class="mx-auto lg:max-w-md 4xl:max-w-lg rounded-lg"
                />
            </div>
        </div>
    </div>
</template>

<script setup></script>
