import {
    createApp
} from "vue"
import App from './App.vue'
import router from "./router";
import "./index.css";

// components
import footer from "./components/footer.vue"
import navbar from "./components/navbar.vue"

// home components
import about from "./components/home/about.vue"
import landing from "./components/home/landing.vue"
import portfolio from "./components/home/portfolio.vue"
import skills from "./components/home/skills.vue"
import contact from "./components/home/contact.vue"

const app = createApp(App);

app
    .use(router)
    .component("cfooter", footer)
    .component("NavBar", navbar)
    // home
    .component("about", about)
    .component("landing", landing)
    .component("portfolio", portfolio)
    .component("skills", skills)
    .component("contact", contact)

app.mount('#app')