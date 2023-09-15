<template>
  <div>
    <NavBar1 />
    <NavBar2 />
    <NavBar3 :fetch="fetch"/>
  </div>
</template>

<script>
import NavBar1 from "./NavBar1.vue";
import NavBar2 from "./NavBar2.vue";
import NavBar3 from "./NavBar3.vue";
export default {
  name: "TopNavBar",
  components: {
    NavBar1,
    NavBar2,
    NavBar3,
  },

};
</script>

<style>
</style>