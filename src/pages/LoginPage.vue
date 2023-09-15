<template>
  <AppLayout>
    <AlertMessage v-if="openAlert" :message="message" :severity="severity" />
    <div class="login-container">
      <h1>Login</h1>

      <form action="" @submit="handleLogin">
        <div class="field">
          <label for="">Email</label>
          <input type="email" v-model="email" />
        </div>
        <br />
        <div class="field">
          <label for="">Password</label>
          <input type="password" v-model="password" />
        </div>
        <div class="btn">
          <button>Login</button>
        </div>
      </form>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import { userAuth } from "../context/Auth";
import { computed } from "vue";
import AlertMessage from "@/components/Alerts/AlertMessage.vue";
import { API } from "../services/api";

export default {
  name: "LoginPage",
  components: {
    AppLayout,
    AlertMessage,
  },
  data() {
    return {
      email: "",
      password: "",
      openAlert: false,
      message: "",
      severity: "",
      seconds: 2000,
      timer: 2000,
    };
  },

  setup() {
    const isAuthenticated = computed(() => userAuth.loggedIn);

    return { isAuthenticated, userAuth };
  },

  methods: {
    async handleLogin(e) {
      e.preventDefault();

      if (this.email === "") {
        this.openAlert = true;
        this.message = "Email is required";
        this.severity = "info";

        setTimeout(() => {
          this.openAlert = false;
        }, this.seconds);
      } else if (this.password === "") {
        this.openAlert = true;
        this.message = "Password is required";
        this.severity = "error";

        setTimeout(() => {
          this.openAlert = false;
        }, this.seconds);
      } else {
        try {
          const res = await API.post("/user/login", {
            email: this.email,
            password: this.password,
          });
          console.log(res);
        } catch (error) {
          this.openAlert = true;
          this.severity = "error";
          this.message = error.response.data;
        }
        // this.userAuth.loggedIn = !this.userAuth.loggedIn;
        // this.userAuth.user.email = this.email;
        // this.openAlert = true;
        // this.message = "Login successfull";
        // this.severity = "success";

        // setTimeout(() => {
        //   this.$router.push("/");
        // }, 2000);
      }
    },

    close() {
      this.openAlert = false;
    },
  },
  provide() {
    return {
      open: this.openAlert,
      close: this.close,
    };
  },
  watch: {
    email(newValue) {
      if (newValue) {
        this.openAlert = false;
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  width: 300px;
  margin: 100px auto;
  height: 300px;
  box-shadow: 2px 2px 10px #eda415;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.field input {
  width: 250px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #eda415;
  padding: 0px 10px;
}

button {
  width: 100%;
  margin-top: 10px;
  height: 30px;
  border-radius: 10px;
  padding: 0px 10px;
  background: #eda415;
  color: white;
  border: none;
}

.btn {
  margin: auto;
  display: flex;
  justify-content: center;
}
</style>