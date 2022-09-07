import {
    createApp
} from "vue"
import App from './App.vue'
import router from "./router";
import "./index.css";

// components
import footer from "./components/footer.vue"
import navbar from "./components/navbar.vue"
import {
    library
} from '@fortawesome/fontawesome-svg-core'

// home components
import about from "./components/home/about.vue"
import landing from "./components/home/landing.vue"
import portfolio from "./components/home/portfolio.vue"
import skills from "./components/home/skills.vue"
import contact from "./components/home/contact.vue"
import detail from "./components/home/detail.vue"
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
/* import specific icons */
import {
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import {
    faEnvelope
} from "@fortawesome/free-regular-svg-icons"

/* add icons to the library */
library.add(faGithub, faLinkedin, faEnvelope)
const app = createApp(App);

app
    .use(router)
    .component("cfooter", footer)
    .component("NavBar", navbar)
    .component('font-awesome-icon', FontAwesomeIcon)
    // home
    .component("about", about)
    .component("landing", landing)
    .component("portfolio", portfolio)
    .component("skills", skills)
    .component("contact", contact)
    .component("detail", detail)

app.mount('#app')