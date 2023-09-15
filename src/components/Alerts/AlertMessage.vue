<template>
  <div class="alert-container" >
    <div :style="alertContent">
      <p>{{ message }}</p>
      <p @click="close" class="close">x</p>
    </div>
  </div>
</template>

<script>
import success from "../../assets/alerts/success.svg";
import error from "../../assets/alerts/error.png";
import info from "../../assets/alerts/info.svg";

export default {
  name: "AlertMessage",

  data() {
    return {
      alertContent: {
        backgroundColor:
          this.severity === "info"
            ? "#0f83ffff"
            : this.severity === "success"
            ? "#3caf56ff"
            : this.severity === "error"
            ? "#e46370ff"
            : "transparent",
        opacity: "",
        margin: "15% auto",
        padding: "20px",
        border: "2px solid #888",
        width: "250px",
        height: "10px",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
      },
      icons: [{ icon: success }, { icon: error }, { icon: info }],
    };
  },

  inject: ["open", "close"],

  props: {
    message: String,
    severity: String,
  },
};
</script>

<style>
.alert-container {
  display: block;
  position: fixed;
  z-index: 1;
  right: 200px;
  top: 0;
  min-width: 100px;
  overflow: auto;
  /* background-color: rgb(0, 0, 0); */
  /* background-color: rgba(0, 0, 0, 0.4); */
}

.alert-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 250px;
  border-radius: 10px;
}

.close {
  color: white;
  cursor: pointer;
}
</style>