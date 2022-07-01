<template>
    <div class="hero min-h-screen bg-base-500">
        <div class="hero-content flex-col lg:flex-row">
            <img src="../../assets/dev.svg" class="mx-auto lg:max-w-md 4xl:max-w-lg rounded-lg" />
            <div class="max-w-md text-center md:text-left">
                <h1 class="text-contrast">Hi, I'm</h1>
                <h1 class="text-primary text-5xl font-bold">
                    <span class="tooltip" data-tip="Pronounced Lawrence">Laurens</span>
                    Weterings<span class="text-accent">.</span>
                </h1>
                <h1 class="text-3xl pb-6 text-secondary">Software Engineer.</h1>
                <h1 class="text-xl text-center">
                    Computer science student passionate about cyber security and new technologies.
                </h1>
                <div class="flex py-5 w-full justify-center lg:justify-end">
                    <button class="btn btn-secondary" href="#about">
                        <eye-icon class="h-5 w-5 mx-2" /> View portfolio
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { EyeIcon } from "@heroicons/vue/outline";
</script>
