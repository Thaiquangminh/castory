import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "@/views/auth/LoginView.vue";
import AdminLoginView from "@/views/auth/AdminLoginView.vue";
import ListView from "@/views/list/ListView.vue";
import BrowseView from "@/views/browse/BrowseView.vue";
import CardQuestionView from "@/views/card/CardQuestionView.vue";
import CardAnswerView from "@/views/card/CardAnswerView.vue";
import BrowseCardView from "@/views/browse/BrowseCardView.vue";
import BrowseCardDetailView from "@/views/browse/BrowseCardDetailView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/list",
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: { needLogin: false },
  },
  {
    path: "/admin",
    name: "loginAdmin",
    component: AdminLoginView,
    meta: { needLogin: false },
  },
  {
    path: "/list",
    name: "list",
    component: ListView,
    meta: { needLogin: true },
  },
  {
    path: "/list/:id",
    name: "cardDetailsQuestion",
    props: true,
    component: CardQuestionView,
    meta: { needLogin: true },
  },
  {
    path: "/answer/:id",
    name: "cardDetailsAnswer",
    props: true,
    component: CardAnswerView,
    meta: { needLogin: true },
  },
  {
    path: "/browse",
    name: "browse",
    component: BrowseView,
    meta: { needLogin: true },
  },
  {
    path: "/browse/:id",
    name: "browseCard",
    component: BrowseCardView,
    meta: { needLogin: true },
  },
  {
    path: "/browse/card/:id",
    name: "browseCardDetails",
    component: BrowseCardDetailView,
    meta: { needLogin: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// ---------------- guard router using token in localStorage ---------------- /
router.beforeEach((to, from, next) => {
  if (to.meta.needLogin && !!localStorage.getItem("token") === false) {
    next("/login");
  } else if (!to.meta.needLogin && !!localStorage.getItem("token")) {
    next("/list");
  } else {
    next();
  }
});

export default router;
