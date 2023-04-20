import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "@/views/auth/LoginView.vue";
import CardView from "@/views/card/CardView.vue";
import ListView from "@/views/list/ListView.vue";
import DialogComponent from "@/components/ui/DialogComponent.vue";

Vue.use(VueRouter);

const routes = [
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
    name: "card",
    component: CardView,
  },
  {
    path: "/test",
    name: "",
    component: DialogComponent,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
