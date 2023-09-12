import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../pages/AppHome.vue";
import ProjectShow from "../pages/ProjectShow.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: AppHome },
    { path: "/project", name: "project", component: ProjectShow },
  ],
});
export { router };
