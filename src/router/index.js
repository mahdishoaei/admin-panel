import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: function () {
      return import("../views/Home.vue");
    },
  },
  {
    path: "/product/new",
    name: "create",
    component: function () {
      return import("../views/Create.vue");
    },
  },
  {
    path: "/product/:id",
    name: "edit",
    component: function () {
      return import("../views/Edit.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
