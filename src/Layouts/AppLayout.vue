<template>
  <TopNavBar :fetch="fetch" />
  <slot></slot>
  <Footer />
</template>

<script>
import TopNavBar from "@/components/NavBar/TopNavBar.vue";
import Footer from "@/components/Footer/FooterVue.vue";

export default {
  components: {
    TopNavBar,
    Footer,
  },
  // props: {
  //   fetch: Promise,
  // },
};
</script>

<style>
</style>