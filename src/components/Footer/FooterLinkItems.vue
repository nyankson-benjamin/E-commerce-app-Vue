<template>
  <div>
    <h4 class="item-header">
      {{ header }}
    </h4>

    <div class="items" v-for="item in items" :key="item">
      <div class="oval"></div>
      <p class="item-link">{{ item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "items"],
};
</script>

<style>
.item-header {
  color: #1b5a7d;
  font-family: Poppins;
  font-size: 19.38px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.oval {
  width: 10px;
  height: 10px;
  background: #d9d9d9;
  border-radius: 100%;
}

.items {
  display: flex;
  align-items: center;
  gap: 10px;
}

.item-link {
  color: #1b5a7d;
  font-family: Poppins;
  font-size: 19.38px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>