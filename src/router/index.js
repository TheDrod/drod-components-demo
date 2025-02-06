import { createRouter, createWebHistory } from "vue-router";

import components from "../components/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../pages/DevIndex.vue"),
      meta: {
        hidden: true,
      },
    },
    {
      path: "/icons",
      component: () => import("../pages/DevIcons.vue"),
    },
    {
      path: "/components",
      component: () => import("../pages/DevComponents.vue"),
      children: components.map((c) => ({
        name: `${c.name}`,
        path: `/components/${c.url}`,
        component: () => import(`../components/${c.name}.vue`),
      })),
    },
  ],
});

export default router;
