import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "@/views/auth/LoginView.vue";
import CardView from "@/views/card/CardView.vue";
import ListView from "@/views/list/ListView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: ListView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/list",
    name: "list",
    component: ListView,
  },
  {
    path: "/list/:id",
    name: "cardDetails",
    component: CardView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
