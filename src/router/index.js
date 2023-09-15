import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import Login from "../pages/LoginPage.vue";
import Signup from "../pages/SignUpPage.vue";
import Confirm from "../pages/ConfirmEmail.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Signup },
  { path: "/confirm", name: "Confirm", component: Confirm },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
