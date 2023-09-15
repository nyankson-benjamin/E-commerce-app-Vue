<template>
  <div class="footer-container">
    <br>
    <Subscribe />

    <FooterLinks/>
  </div>
</template>

<script>
import Subscribe from "./SubscribeFooter.vue";
import FooterLinks from "./FooterLinks.vue";
export default {
  components: {
    Subscribe,
    FooterLinks

  },
};
</script>

<style>
.footer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 41px;
  flex-shrink: 0;
  background: #e2f4ff;
}
</style>