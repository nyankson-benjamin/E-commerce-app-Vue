<template>
  <div class="containers">
    <div class="nav3-items">
      <select @change="fetchProduct">
        <template v-for="(item, index) in categories" :key="index">
          <option :value="item.toLowerCase()">
            {{ item }}
          </option>
        </template>
      </select>

      <div v-for="(item, index) in navigations" :key="item" class="navs">
        <h4>{{ item }}</h4>
        <img :src="arrow" alt="" v-if="navigations[index] !== 'About us'" />
      </div>
    </div>

    <h3 class="day-30">30 Days Free Return</h3>
  </div>
</template>

<script>
import arrow from "../../assets/svg/arrow.svg";
export default {
  data() {
    return {
      categories: [
        "Tablets",
        "Laptops",
        "Headphones",
        "Smartphones",
        "Console",
        "Other",
      ],

      navigations: ["Home", "Catalog", "Blog", "Pages", "About us"],
      arrow,
      category: "",
    };
  },

  inject: ["fetch"],
  methods: {
    fetchProduct(e) {
      this.fetch(e.target.value);
    },
  },
};
</script>
<style scoped>
.containers {
  display: flex;
  height: 71px;
  justify-content: space-between;
  align-items: center;
  gap: 98px;
  flex-shrink: 0;
  background: #f4f4f4;
  padding-right: 20px;
}

select {
  display: flex;
  width: 218px;
  height: 71px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  background: var(--b, #eda415);
  border: none;
  color: white;
  margin-left: 20px;
}

.nav3-items {
  display: flex;
  gap: 30px;
}

.navs {
  display: flex;
  gap: 10px;
  align-items: center;
}

.day-30 {
  color: var(--a, #003f62);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>