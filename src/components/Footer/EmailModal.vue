<template>
  <div class="modal">
    <div class="modal-content">
      <div class="close"><h2 @click="openModal">x</h2></div>

      <div class="email">
        <label for="email">Email:</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          v-model="email"
        />
        <span v-if="hasEmailError">{{ emailErrMsg }}</span>
        <br />
        <label for="email">Message:</label>
        <br />
        <textarea v-model="message" />
        <span v-if="hasMsgError">{{ msgMsg }}</span>
      </div>
      <div class="send-button">
        <button @click="send">Send email</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      message: "",
      hasEmailError: false,
      emailErrMsg: "",
      emailReg: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
      hasMsgError: false,
      msgMsg: "",
    };
  },
  props: {
    openModal: [],
  },

  methods: {
    send() {
      if (this.email === "") {
        this.hasEmailError = true;
        this.emailErrMsg = "Email is required";
      } else if (!this.emailReg.test(this.email)) {
        this.hasEmailError = true;
        this.emailErrMsg = "Invalid email";
      }

      if (this.message === "") {
        this.hasMsgError = true;
        this.msgMsg = "Message is required";
      } else {
        alert("message sent successfully");
        this.openModal()
      }
    },
  },

  watch: {
    email(newValue) {
      if (newValue) {
        this.hasEmailError = false;
      }
    },

    message(newValue) {
      if (newValue) {
        this.hasMsgError = false;
      }
    },
  },
};
</script>

<style>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 250px;
  border-radius: 10px;
}

.close {
  display: flex;
  justify-content: end;
  cursor: pointer;
}

.close h2 {
  font-size: 20px;
}

.close h2:hover {
  transform: scale(1.15);
}

.email {
  display: flex;
  flex-direction: column;
}

.email input,
textarea {
  width: 90%;
  height: 30px;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #eda415;
}

.send-button {
  display: flex;
  justify-content: end;
  margin-top: 10px;
}

.send-button button {
  width: 100px;
  height: 40px;
  border-radius: 10px;
  background: var(--b, #eda415);
  border: none;
  margin-left: -40px;
  color: #fefefe;
}
</style>