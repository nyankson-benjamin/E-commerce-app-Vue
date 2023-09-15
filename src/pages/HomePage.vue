<template>
  <AppLayout>
    <div class="homepage">
      <div class="home-item">
        <div class="item1">
          <h3>
            <span>Canon</span><br />
            <span>Camera</span>
          </h3>

          <div class="buts">
            <button :style="butStyle('Shop now')">Shop now</button>
            <button :style="butStyle('')">View more</button>
          </div>
        </div>
        <div class="cam">
          <img :src="cam" alt="" />
          <div class="price">
            <p><span>Only</span> <br /><span>GHS200</span></p>
          </div>
        </div>
      </div>

      <div class="categories">
        <div v-for="(item, index) in categories" :key="index">
          <div class="category-item">
            <img :src="item.pic" alt="" />
            <div class="category-title">
              <p>{{ item.title }}</p>
              <span>({{ item.items }} items)</span>
            </div>
          </div>
        </div>
      </div>

      <div class="popular">
        <div>
          <h3>Popular products</h3>
        </div>
        <div class="cate">
          <div
            v-for="(item, index) in category"
            :key="index"
            class="categoryItem"
            @click="filterProducts(item)"
          >
            <h5>{{ item }}</h5>
          </div>
        </div>
      </div>

      <ProductsVue :products="products" :item="item" :loading="loading" />
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import cam from "../assets/svg/cam1.svg";
import axios from "axios";
import cam1 from "../assets/svg/cam2.svg";
import speaker from "../assets/svg/speaker.svg";
import laptop from "../assets/svg/laptop.svg";
import ProductsVue from "@/components/Products/ProductList.vue";

export default {
  name: "HomePage",
  components: {
    AppLayout,
    ProductsVue,
  },

  data() {
    return {
      cam,
      categories: [
        { pic: speaker, title: "Speaker", items: 6 },
        { pic: laptop, title: "Desktop & Laptops", items: 6 },
        { pic: cam1, title: "DSLR camera", items: 6 },
      ],

      category: ["All", "laptops", "smartphones", "tablets", "mouse"],
      products: [],
      laptops: [],
      tablets: [],
      phones: [],
      backupData: [],
      item: "",
      loading: false,
    };
  },

  async created() {
    try {
      this.loading = true;
      const products = await axios.get("https://dummyjson.com/products");
      this.laptops = products?.data?.products.filter(
        (item) => item.category === "laptops"
      );

      this.tablets.push(
        products?.data?.products.filter((item) => item.category === "tablets")
      );

      this.phones = products?.data?.products.filter(
        (item) => item.category === "smartphones"
      );

      this.products.push(...this.laptops, ...this.phones);
      this.backupData.push(...this.laptops, ...this.phones);
      this.loading = false;
    } catch (error) {
      console.log(error);
      this.loading = false;
    }
  },

  methods: {
    butStyle(text) {
      return {
        display: "flex",
        width: "144px",
        height: "61px",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        borderRadius: "20px",
        color: text === "Shop now" ? "white" : "#316887",
        background: text === "Shop now" ? "#EDA415" : "white",
        border: text === "Shop now" ? "none" : "1px solid #316887",
      };
    },

    async filterProducts(item) {
      this.item = item;
      this.loading = true;
      try {
        const res = await axios.get(
          "https://dummyjson.com/products/category/" + item
        );
        item === "All"
          ? (this.products = this.backupData)
          : (this.products = res?.data.products);
        this.loading = false;
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },
  },
  provide() {
    return {
      fetch: this.filterProducts,
    };
  },
};
</script>

<style>
.buts {
  display: flex;
  gap: 20px;
}

.home-item {
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.item1 h3 {
  color: #1b5a7d;
  font-family: Poppins;
  font-size: 43px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.price {
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 114.607px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 674.157px;
  background: var(--b, #eda415);
  margin-top: 200px;
  margin-left: -80px;
}

.cam {
  display: flex;
}

.price p {
  color: #fff;
  font-family: Poppins;
  font-size: 21.573px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
}

.categories {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.category-item {
  display: flex;
  width: 381.635px;
  height: 147px;
  justify-content: center;
  align-items: center;
  gap: 43.346px;
  border-radius: 20px;
  border: 1px solid #a5a5a5;
}

.category-title p {
  color: #1b5a7d;
  font-family: Poppins;
  font-size: 23.38px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.category-item span {
  color: #265f7f;
  font-family: Poppins;
  font-size: 18.846px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.popular {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 100px auto;
}

.cate {
  display: flex;
  gap: 20px;
}

.categoryItem {
  display: flex;
  width: 139px;
  height: 45px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border: 1px solid var(--a, #003f62);
  text-transform: capitalize;
  color: #1b5a7d;
  font-family: Poppins;
  font-size: 16.38px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
}

.popular h3 {
  color: #1b5a7d;
  font-family: Poppins;
  font-size: 27.38px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
</style>