<template>
    <div class="navbar sticky bg-white shadow-lg z-50 px-16 font-custom text-black">
        <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl font-bold"
                ><span class="text-primary">0x</span>Laurens</a
            >
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal text-xl font-normal">
                <li v-for="(link, index) in links" :key="link">
                    <a :class="{ active: link == currentSection }" :href="`#${link}`"
                        >{{ link }}.</a
                    >
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const currentSection = ref("");
const links = ["home", "portfolio", "about", "skills", "contact"];
const options = {
    threshhold: 0.25,
};
onMounted(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                console.log(entry.target.getAttribute("id"));
                currentSection.value = entry.target.getAttribute("id");
            }
        }, options);
    });

    sections.forEach((section) => {
        observer.observe(section);
    });
});
</script>
