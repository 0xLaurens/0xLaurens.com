import {
    createApp
} from "vue"
import App from './App.vue'
import router from "./router";
import "./index.css";

// components
import footer from "./components/footer.vue"

const app = createApp(App);

app
    .use(router)
    .component("cfooter", footer)

app.mount('#app')