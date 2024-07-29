import { createRouter, createWebHistory } from "vue-router";
import LineLiff from "../components/LineLiff.vue";
const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/liff/template",
      component: LineLiff,
    },
  ],
});

export default router;