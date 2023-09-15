<template>
  <div class="footer-link-container">
    <div>
      <img :src="electron" alt="" />
      <p>27 Ama Akroma st</p>
      <p>Takoradi</p>

      <hr>
    </div>
    <div v-for="item in footerItems" :key="item.header">
      <FooterLinkItems :header="item.header" :items="item.items"/>
    </div>
  </div>
</template>

<script>
import electron from "../../assets/svg/electron1.svg";
import FooterLinkItems from "./FooterLinkItems.vue";

export default {
  components: {
    FooterLinkItems,
  },
  data() {
    return {
      electron,
      footerItems: [
        {
          header: "Find product",
          items: [
            "Brownze anrnold",
            "Chronograph blue",
            "Smart phones",
            "Automatic watch",
            "Hair straighteners",
          ],
        },
        {
          header: "Get help",
          items: [
            "About us",
            "Contact us",
            "Return policy",
            "Privacy policy",
            "Payment policy",
          ],
        },
        {
          header: "About us",
          items: ["News", "Service", "Our Policy", "Customer care", "Faq's"],
        },
      ],
    };
  },
};
</script>

<style>
.footer-link-container {
  width: 80%;
  display: flex;
  justify-content: space-between;
}
</style>