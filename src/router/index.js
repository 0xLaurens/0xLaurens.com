import {
    createRouter,
    createWebHistory
} from "vue-router";

import Home from "../views/home/home.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/",
        name: "Home",
        component: Home
    }, ],
});

export default router;