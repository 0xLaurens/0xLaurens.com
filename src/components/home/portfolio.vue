<template>
    <div class="flex flex-col min-h-[110vh] bg-base-300 py-20 px-5 md:px-16 font-custom">
        <h1 id="portfolio" class="title text-5xl font-bold">
            Portfolio.
            <div class="line w-48"></div>
        </h1>
        <div
            v-for="(project, index) in projects"
            class="md:inline-flex py-10"
            :class="{ 'flex-row-reverse': index % 2 === 0 }"
        >
            <img
                class="rounded-xl md:w-3/5 my-4 md:my-0"
                src="https://www.datocms-assets.com/38195/1621499794-feedhive-io-macbook-pro-3.png"
            />
            <div :class="{ 'pl-0': index % 2 === 0 }" class="md:self-center md:px-10 md:w-2/5">
                <h2 class="text-3xl underline underline-offset-4 font-bold">{{ project.title }}</h2>
                <span class="text-xs">May 2022</span>
                <p class="py-2 font-light text-lg 2xl:text-2xl">
                    {{ project.short }}
                </p>
                <button
                    class="justify-self-end btn btn-primary font-extrabold text-xl rounded-xl hover:bg-primary-focus w-64 md:w-full my-5"
                >
                    About
                    <arrow-right-icon class="ml-2 h-5" />
                </button>
                <div class="divider md:divider-horizontal"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ArrowRightIcon } from "@heroicons/vue/solid";
import { ref } from "vue";

import portfolio from "../../data/portfolio.json";

const projects = ref(portfolio);
</script>
