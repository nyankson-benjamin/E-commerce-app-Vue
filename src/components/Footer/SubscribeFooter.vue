<template>
  <EmailModal v-if="showModal" :openModal="sendEmail" />
  <div class="subscribe-container">
    <div class="footer-item">
      <div class="h3">
        <h3>Subscribe newsletter</h3>
      </div>

      <div class="send" @click="sendEmail">
        <h5>Email address</h5>
        <img :src="send" alt="" />
      </div>

      <div class="call">
        <img :src="headset" alt="" />
        <div>
          <p>Call us 24/7:</p>
          <p>(+233)241216747</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import send from "../../assets/svg/send.svg";
import headset from "../../assets/svg/headset.svg";
import EmailModal from "./EmailModal.vue";
export default {
  components: {
    EmailModal,
  },
  data() {
    return {
      send,
      headset,
      showModal: false,
    };
  },

  methods: {
    sendEmail() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
.subscribe-container {
  display: flex;
  width: 80%;
  height: 139px;
  border-radius: 20px;
  background: #fff;
}

.footer-item {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 137px;
  flex-shrink: 0;
  margin: 0 auto;
}

.send {
  display: flex;
  width: 200px;
  height: 63px;
  padding-left: 0px;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  background: var(--b, #eda415);
  padding: 0px 20px;
  justify-content: space-between;
  color: #fff;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.call {
  display: flex;
  gap: 20px;
}
.h3 {
  width: 200px;
}
</style>