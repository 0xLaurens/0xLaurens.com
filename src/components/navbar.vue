<template>
    <div class="navbar sticky bg-transparent z-50">
        <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl drop-shadow-lg"
                ><span class="font-bold text-primary">0x</span>Laurens</a
            >
        </div>
        <div class="flex-none">
            <div class="m-4 inline-grid grid-cols-2">
                <sun-icon class="h-4 w-4 m-1 col-start-1 row-start-1" />

                <moon-icon class="h-4 w-4 m-1 col-start-2 row-start-1" />
                <input
                    @click="toggleTheme"
                    type="checkbox"
                    class="toggle bg-transparent col-start-1 row-start-1 col-span-2 [--b1:219_14%_80%] checked:[--b1:215_28%_17%]"
                    checked
                />
            </div>
            <ul class="menu menu-horizontal p-0">
                <li><a>about.</a></li>
                <li><a>portfolio.</a></li>
                <li><a>skills.</a></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { MoonIcon, SunIcon } from "@heroicons/vue/outline";
import { ref } from "vue";

let isDark = ref(true);

function toggleTheme() {
    if (isDark.value != true) {
        document.documentElement.setAttribute("data-theme", "dark");
        isDark.value = true;
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        isDark.value = false;
    }
}
</script>
