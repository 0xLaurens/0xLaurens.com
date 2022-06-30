import {
    createApp
} from "vue"
import App from './App.vue'
import router from "./router";
import "./index.css";

// components
import footer from "./components/footer.vue"
import navbar from "./components/navbar.vue"

const app = createApp(App);

app
    .use(router)
    .component("cfooter", footer)
    .component("NavBar", navbar)

app.mount('#app')