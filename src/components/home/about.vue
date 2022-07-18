<template>
    <div class="flex h-[110vh] font-custom justify-center content-center py-20">
        <div class="grid grid-cols-3 grid-flow-row px-5 md:px-16 gap-y-4 self-center">
            <div class="col-span-3 rounded-lg">
                <h1 id="about" class="title text-5xl font-bold">
                    About.
                    <div class="line w-32" />
                </h1>
            </div>

            <div class="col-span-3 md:col-span-2 row-span-2 rounded-lg">
                <p class="py-6 font-light text-3xl leading-relaxed xl:pr-96">
                    I'm a <span class="underline">fullstack developer</span> based in the
                    Netherlands. Currently studying Computer science at Avans University of applied
                    sciences.
                </p>
            </div>

            <div
                class="col-span-2 md:col-span-1 xl:col-span-1 xl:col-start-3 row-span-3 md:row-span-2 col-start-2"
            >
                <img
                    src="../../assets/about.svg"
                    class="mx-auto lg:max-w-md 4xl:max-w-lg rounded-lg"
                />
            </div>
        </div>
    </div>
</template>

<script setup></script>
