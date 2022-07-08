<template>
    <div class="flex min-h-screen bg-base-200 font-custom justify-center content-center">
        <div class="grid grid-cols-3 grid-flow-row px-16 gap-y-4 bg-base-200 self-center">
            <div class="col-span-3 rounded-lg">
                <h1 class="text-5xl font-bold">Portfolio<span class="text-accent">.</span></h1>
                <div class="line w-32" />
            </div>

            <div class="col-span-1 row-span-1 row-start-2 row-end-3 rounded-lg">
                <div class="card rounded-r-none bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Lorem ipsum.</h2>
                        <div class="line w-32" />
                        <p class="font-light">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor
                        </p>
                        <div class="card-actions justify-start sm:justify-center">
                            <div class="badge badge-secondary">Vue</div>
                            <div class="badge badge-secondary">Firebase</div>
                            <div class="badge badge-secondary">Tailwind css</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-span-2 row-span-2 z-50">
                <img
                    class="rounded-xl rounded-tl-none h-full"
                    src="https://www.webfx.com/wp-content/uploads/2021/10/softdash-website-template.png"
                />
            </div>

            <div class="col-span-1 row-span-1 col-start-1 self-end">
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
