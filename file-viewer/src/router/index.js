import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";

const routes = [{ path: "/:path*", name: "home", component: Home }];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
