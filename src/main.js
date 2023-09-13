import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import { router } from "./router";
import App from "./App.vue";
import AppAlert from "./components/project/AppAlert.vue";

const app = createApp(App);
app.component("AppAlert", AppAlert);
app.use(router);
app.mount("#app");
