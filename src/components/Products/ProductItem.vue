<template>
  <div class="productItem">
    <div>
      <img :src="product.thumbnail" alt="" />

      <h5>
        {{ product.title }} <span>({{ product.stock }} items)</span>
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {},
  },

  mounted() {},
};
</script>

<style>
.productItem {
  display: flex;
  width: 308.831px;
  height: 313.748px;
  justify-content: center;
  align-items: start;
  gap: 37.374px;
  border-radius: 19.671px;
  border: 0.984px solid #b6b6b6;
}

.productItem img {
  width: 100%;
  border-radius: 19.671px;
  height: 200px;
}

.productItem h5 {
  color: var(--a, #003f62);
  font-family: Poppins;
  font-size: 17.094px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 10px;
}

.productItem:hover {
  transform: scale(1.005);
}
</style>