<template>
    <div class="navbar fixed backdrop-blur-md z-50 px-5 lg:px-16 font-custom text-black">
        <div class="flex-1">
            <a href="#home" class="btn btn-ghost normal-case text-xl font-bold"
                ><span class="text-primary">0x</span>Laurens</a
            >
        </div>
        <div class="flex-none">
            <ul v-if="!mobileView" class="menu menu-horizontal text-xl font-normal">
                <li v-for="link in links" :key="link" class="inline-block">
                    <a :class="{ active: link == currentSection }" :href="`#${link}`"
                        >{{ link }}.</a
                    >
                </li>
            </ul>
            <div v-if="mobileView">
                <a @click="openMobileNav = !openMobileNav">
                    <menu-alt1-icon v-show="!openMobileNav" class="h-10 w-10"
                /></a>
                <a @click="openMobileNav = !openMobileNav">
                    <x-icon v-show="openMobileNav" class="h-10 w-10"
                /></a>
            </div>
        </div>
    </div>
    <aside
        v-show="openMobileNav"
        class="flex flex-col fixed h-screen w-36 bg-white top-0 left-0 z-[49] shadow-lg"
    >
        <label for="my-drawer-5" class="drawer-overlay"></label>
        <ul class="menu menu-vertical text-xl font-normal pt-32">
            <li v-for="link in links" :key="link" class="inline-block">
                <a :class="{ active: link == currentSection }" :href="`#${link}`">{{ link }}.</a>
            </li>
        </ul>
    </aside>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { MenuAlt1Icon, XIcon } from "@heroicons/vue/solid";

const mobileView = ref(false);
const openMobileNav = ref(false);

const currentSection = ref("");
const links = ["home", "about", "contact"];
const options = {
    threshhold: 1,
};
onMounted(() => {
    const sections = document.querySelectorAll(".title");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                currentSection.value = entry.target.getAttribute("id");
            }
        }, options);
    });

    sections.forEach((section) => {
        observer.observe(section);
    });

    changeNav();

    window.addEventListener("resize", () => {
        changeNav();
    });
});
function changeNav() {
    if (window.innerWidth <= 900) {
        mobileView.value = true;
    } else {
        mobileView.value = false;
        openMobileNav.value = false;
    }
}
</script>
