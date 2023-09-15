<template>
  <AppLayout>
    <AlertMessage v-if="openAlert" :message="message" :severity="severity" />
    <div class="login-container">
      <h1>CREATE AN ACCOUNT</h1>

      <form action="" @submit.prevent="handleLogin">
        <div v-for="(item, index) in signUp" :key="index">
          <div class="field">
            <label for="">{{ item.Placeholder }}</label>
            <input
              :type="item.type"
              v-model="register[item.value]"
              required
              :placeholder="item.Placeholder"
            />
            <br />
          </div>
        </div>
        <div class="field">
          <select v-model="register.country" required>
            <option value="">...select country</option>
            <option
              v-for="(country, index) in countries"
              :key="index"
              :value="country.label"
            >
              {{ country.label }}
            </option>
          </select>
        </div>

        <div class="btn">
          <button>REGISTER</button>
        </div>
        <br />
      </form>

      <p>
        Already have an account?
        <router-link to="/login">Login</router-link>
        here
      </p>
    </div>
  </AppLayout>
</template>
  
  <script>
import AppLayout from "@/Layouts/AppLayout.vue";
import { userAuth } from "../context/Auth";
import { computed } from "vue";
import AlertMessage from "@/components/Alerts/AlertMessage.vue";
import { API } from "../services/api";
import { signUp } from "../Constants/Signup";
import { countries } from "../Constants/countries";

export default {
  name: "SignUp",
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
      register: {
        fname: "",
        lname: "",
        email: "",
        contact: "",
        password: "",
        confirmPass: "",
        otp: "",
        country: "",
        isVerified: false,
        role: "user",
        isAdmin: false,
      },
    };
  },

  setup() {
    const isAuthenticated = computed(() => userAuth.loggedIn);

    return { isAuthenticated, userAuth, signUp, countries };
  },

  methods: {
    async handleLogin() {
      const min = 1000;
      const max = 9999;
      this.register.otp = Math.floor(Math.random() * (max - min + 1)) + min;
      try {
        const res = await API.post("/user/register", this.register);
        console.log(res);
        if (res.status === 201) {
          this.openAlert = true;
          this.severity = "success";
          this.message = "Signup successfull";

          setTimeout(() => {
            this.$router.push("/confirm");
          }, 2000);
        }
      } catch (error) {
        this.openAlert = true;
        this.severity = "error";
        this.message = error.response.data;
        console.log(error);
      }
      // this.userAuth.loggedIn = !this.userAuth.loggedIn;
      // this.userAuth.user.email = this.email;
      // this.openAlert = true;
      // this.message = "Login successfull";
      // this.severity = "success";

      // setTimeout(() => {
      //   this.$router.push("/");
      // }, 2000);
    },

    close() {
      this.openAlert = false;
    },

    val(value) {
      return `${this.register}.${value}`;
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
  width: 500px;
  margin: 100px auto;
  /* height: 600px; */
  box-shadow: 2px 2px 10px #eda415;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.field input {
  width: 300px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #eda415;
  padding: 0px 10px;
}

.field select {
  width: 321px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #eda415;
  padding: 0px 10px;
}

button {
  width: 100%;
  margin-top: 10px;
  height: 50px;
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

a {
  text-decoration: none;
  color: #eda415;
}
</style>