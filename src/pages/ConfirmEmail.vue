<template>
  <AppLayout>
    <AlertMessage v-if="openAlert" :message="message" :severity="severity" />
    <div class="login-container">
      <h1>Confirm Email</h1>

      <form action="" @submit="handleLogin">
        <br />
        <div class="field">
          <div v-for="(item, index) in new Array(4)" :key="index">
            <!-- <input type="text" v-model="password" maxlength="1" placeholder="0" />
          <input type="text" v-model="password" placeholder="0" /> -->
            <!-- <input type="text" v-model="password" placeholder="0" /> -->
            <input
              type="text"
              v-model.number="code[index]"
              placeholder="0"
              maxlength="1"
            />
          </div>
        </div>

        <div class="btn">
          <button :disabled="disable" :class="disable ? 'disabled' : 'enabled'">
            Confirm Email
          </button>
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
  name: "ConfirmEmail",
  components: {
    AppLayout,
    AlertMessage,
  },
  data() {
    return {
      code: { Item0: "", Item1: "", item2: "", item3: "" },
      openAlert: false,
      message: "",
      severity: "",
      seconds: 2000,
      timer: 2000,
      disable: true,
    };
  },

  setup() {
    const isAuthenticated = computed(() => userAuth.loggedIn);

    return { isAuthenticated, userAuth };
  },

  methods: {
    async handleLogin(e) {
      e.preventDefault();

      const vals = { code: Object.values(this.code) };

      try {
        const res = await API.post("/confirm", { ...vals.code });
        console.log(res);
      } catch (error) {
        this.openAlert = true;
        this.severity = "error";
        this.message = error.response.data;
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

    code() {},
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
  flex-direction: row;
  gap: 10px;
}

.field input {
  width: 30px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #eda415;
  padding: 0px 10px;
  text-align: center;
  font-size: 30px;
}

.enabled {
  width: 100%;
  margin-top: 10px;
  height: 30px;
  border-radius: 10px;
  padding: 0px 10px;
  background: #eda415;
  color: white;
  border: none;
}

.disabled {
  width: 100%;
  margin-top: 10px;
  height: 30px;
  border-radius: 10px;
  padding: 0px 10px;
  color: #eda415;
  border: 1px solid #e5e5e5;
}
.btn {
  margin: auto;
  display: flex;
  justify-content: center;
}
</style>