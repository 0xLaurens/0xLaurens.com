<template>
    <div class="flex min-h-[110vh] bg-base-200 font-custom justify-center content-center py-20">
        <div class="grid grid-cols-3 grid-flow-row px-5 md:px-16 lg:gap-y-10 self-center">
            <div class="col-span-3 rounded-lg">
                <h1 id="portfolio" class="title text-5xl font-bold text-black">
                    Portfolio<span class="text-accent">.</span>
                    <div class="line w-32" />
                </h1>
            </div>

            <div
                class="col-span-3 lg:col-span-1 row-span-1 lg:row-start-2 lg:row-end-3 rounded-lg pt-2 lg:pt-0"
            >
                <div
                    class="card card-compact xl:card-normal lg:rounded-r-none bg-white outline-2 min-h-full"
                >
                    <div class="card-body">
                        <h2 class="card-title text-3xl text-black">Lorem ipsum.</h2>
                        <div class="line w-32" />
                        <p class="font-light text-lg 2xl:text-2xl text-black">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor
                        </p>
                        <div class="card-actions justify-start">
                            <div class="badge badge-secondary">Vue</div>
                            <div class="badge badge-secondary">Firebase</div>
                            <div class="badge badge-secondary">Tailwind css</div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="col-span-3 lg:col-span-2 row-span-3 row-start-2 lg:row-start3 lg:row-span-2 pt-4 lg:pt-0"
            >
                <img
                    alt="Project thumbnail"
                    class="rounded-xl lg:rounded-tl-none object-contain"
                    src="https://www.webfx.com/wp-content/uploads/2021/10/softdash-website-template.png"
                />
            </div>

            <div class="col-span-3 md:col-span-1 row-span-1 col-start-1 self-end pt-4 lg:pt-0">
                <button class="btn btn-primary text-2xl px-10 font-bold">
                    about <external-link-icon class="pl-2 h-10 w-10" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ExternalLinkIcon } from "@heroicons/vue/solid";
</script>
