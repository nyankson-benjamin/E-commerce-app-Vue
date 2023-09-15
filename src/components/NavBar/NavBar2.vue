<template>
  <div class="container">
    <AlertMessage v-if="open" />
    <div class="left">
      <router-link to="/">
        <img :src="logo" alt="" />
      </router-link>
      <SearchBarVue />
    </div>

    <div class="right">
      <div class="item" v-if="userAuth.loggedIn">
        <h5>{{ userAuth.user.email }}</h5>
        <div v-for="(item, index) in interactions" :key="index">
          <div class="item">
            <img :src="item.icon" alt="" />
            <h6 v-if="item.hasCount" class="count">0</h6>
            <router-link :to="item.route"
              ><h6>{{ item.text }}</h6></router-link
            >
          </div>
        </div>

        <button @click="logout">Logout</button>
      </div>
      <div v-else class="item">
        <div v-for="(item, index) in authNav" :key="index">
          <div class="item">
            <img :src="item.icon" alt="" />
            <router-link :to="item.route"
              ><h6>{{ item.name }}</h6></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../../assets/svg/electron.svg";
import SearchBarVue from "../SearchBar.vue";
import user from "../../assets/svg/user.svg";
import { userAuth } from "../../context/Auth";
import { computed } from "vue";
import love from "../../assets/svg/love.svg";
import cart from "../../assets/svg/cart.svg";
import AlertMessage from "../Alerts/AlertMessage.vue";

export default {
  components: {
    SearchBarVue,
    AlertMessage,
  },
  data() {
    return {
      logo,

      interactions: [
        { icon: love, text: "Likes", hasCount: true, route: "/likes" },
        { icon: cart, text: "Cart", hasCount: true, route: "/cart" },
      ],

      authNav: [
        { name: "Signin", route: "login", icon: user },
        { name: "Register", route: "register", icon: user },
      ],

      open: false,
    };
  },

  setup() {
    const isAuthenticated = computed(() => userAuth.loggedIn);
    localStorage.setItem("isLoggedIn", true);
    const isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
    return {
      userAuth,
      isAuthenticated,
      isLoggedIn,
    };
  },

  methods: {
    logout() {
      this.userAuth.loggedIn = !this.userAuth.loggedIn;
      setTimeout(() => {
        this.$router.push("/login");
      }, 2000);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  background: var(--a, #003f62);
  display: flex;
  padding: 0px 20px;
}

.left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.right {
  display: flex;
  align-items: center;
  gap: 30px;
  padding-right: 30px;
}

.item {
  display: flex;
  gap: 10px;
  color: white;
  align-items: center;
}

.count {
  display: flex;
  width: 14.211px;
  height: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7.895px;
  border-radius: 394.737px;
  background: var(--b, #eda415);
}

a {
  text-decoration: none;
  color: white;
}

button {
  height: 30px;
  background: var(--b, #eda415);
  color: white;
  border: none;
  border-radius: 10px;
}
</style>