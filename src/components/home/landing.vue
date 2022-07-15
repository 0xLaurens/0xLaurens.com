<template>
    <div class="hero min-h-screen bg-base-500 w-full font-custom py-20">
        <div class="hero-content flex-col lg:flex-row">
            <img
                src="../../assets/dev.svg"
                class="object-contain max-w-xs md:max-w-s lg:max-w-md xl:max-w-lg 2xl:max-w-xl 3xl:max-w-none"
            />
            <div class="max-w-md text-center md:text-left">
                <h1 class="font-medium">Hi, I'm</h1>
                <h1 class="text-5xl font-bold">
                    <span class="tooltip" data-tip="Pronounced Lawrence">Laurens</span>
                    Weterings.
                </h1>
                <h1 class="text-3xl font-light pb-6">Software Engineer.</h1>
                <div class="flex justify-between">
                    <button
                        class="btn btn-outline btn-primary w-[45%] font-extrabold text-base rounded-xl"
                        href="#about"
                    >
                        <user-icon class="h-5 w-5 mr-2" /> about me
                    </button>
                    <button
                        class="btn btn-primary justify-self-end w-[50%] font-extrabold text-base rounded-xl"
                        href="#portfolio"
                    >
                        <eye-icon class="h-5 w-5 mr-2" /> portfolio
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { EyeIcon, UserIcon } from "@heroicons/vue/solid";
</script>
