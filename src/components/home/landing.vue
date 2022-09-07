<template>
    <div class="hero min-h-screen">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 class="font-medium text-xl md:text-left">Hi I'm,</h1>
                <h1 id="home" class="title text-5xl font-bold mt-0 mb-2">
                    <span
                        class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                        >Laurens Weterings.</span
                    >
                </h1>
                <h1 class="font-semibold text-2xl md:text-left">Software Developer.</h1>
                <div class="py-6 px-10">
                    <a href="https://github.com/0xLaurens" target="_blank"
                        ><font-awesome-icon icon="fa-brands fa-github" class="h-7 mr-3"
                    /></a>
                    <a href="mailto:laurens.weterings@gmail.com" target="_blank"
                        ><font-awesome-icon icon="fa-regular fa-envelope" class="h-6"
                    /></a>
                </div>
                <div class="flex justify-center">
                    <a href="#about"><arrow-down-icon class="animate-bounce h-6 w-6" /></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { EyeIcon, UserIcon, ArrowDownIcon } from "@heroicons/vue/solid";
</script>
