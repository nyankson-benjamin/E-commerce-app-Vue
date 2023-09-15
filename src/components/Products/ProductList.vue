<template>
  <div v-if="loading">
    <h1 class="textHeader">Loading.....</h1>
  </div>

  <div v-else>
    <div v-if="products.length > 1">
      <h1 class="textHeader" v-if="item === 'All'" id="available">
        {{ item.toUpperCase() }} PRODUCTS
      </h1>

      <h1 v-else class="textHeader" id="available">
        {{ item ? item.toUpperCase() : "ALL PRODUCTS" }}
      </h1>
      <div class="productList">
        <div v-for="item in products" :key="item.id">
          <ProductItem :product="item" />
        </div>
      </div>
    </div>
    <div v-else class="textHeader">
      <h1>No products available for {{ item }}</h1>
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";

export default {
  props: {
    products: [],
    item: String,
    loading: Boolean,
  },
  components: {
    ProductItem,
  },
  data() {
    return {};
  },
};
</script>
<style>
.productList {
  width: 80%;
  margin: 100px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 20px;
}

.textHeader {
  text-align: center;
}

#available {
  background: #eda415;
  color: white;
  padding: 20px 0px;
}
</style>