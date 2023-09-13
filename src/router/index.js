import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../pages/AppHome.vue";
import ProjectShow from "../pages/ProjectShow.vue";
import ContactPages from "../pages/ContactPages.vue";
import NotFoundPages from "../pages/NotFoundPages.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: AppHome },
    { path: "/project/:id", name: "project-details", component: ProjectShow },
    { path: "/contact", name: "contact", component: ContactPages },
    { path: "/not-found", name: "not-found", component: NotFoundPages },
    { path: "/:pathMatch(.*)*", redirect: "/not-found" },
  ],
});
export { router };
