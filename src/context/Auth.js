import { reactive } from "vue";

export const userAuth = reactive({
  loggedIn: false,
  user: {
    email: "",
  },
});
