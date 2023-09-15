<template>
  <div class="nav1">
    <h6>Need help? Call us:(+233) 241216747</h6>
    <div class="right">
      <img :src="location" alt="" />
      <h6>Our store</h6>
      <img :src="truck" alt="" />
      <h6>Track your order</h6>
    </div>
  </div>
</template>

<script>
import location from "../../assets/svg/location.svg";
import truck from "../../assets/svg/truck.svg";
export default {
  data() {
    return {
      location,
      truck,
    };
  },
};
</script>

<style>
.nav1 {
  height: 100px;
  background: white;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.right {
  display: flex;
  gap: 10px;
}
</style>