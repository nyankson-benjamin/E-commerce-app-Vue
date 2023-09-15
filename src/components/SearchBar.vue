<template>
  <div class="search">
    <input
      type="text"
      placeholder="Search anything"
      :style="textStyle('#292d32', 400)"
    />
    <button :style="textStyle('white', 600)" class="search-button">Search</button>
  </div>
</template>

<script>
export default {
  data() {},
  methods: {
    textStyle(color, weight) {
      return {
        color: color,
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: weight,
        lineHeight: "normal",
      };
    },
  },
};
</script>

<style>
.search {
  display: flex;
}

.search input {
  display: flex;
  width: 438px;
  height: 56px;
  padding-left: 0px;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  background: #fff;
  border: none;
  padding: 0px 20px;
}

.search-button {
  display: flex;
  width: 132px;
  height: 56px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  right: 0px;
  border-radius: 20px;
  background: var(--b, #eda415);
  border: none;
  margin-left: -40px;
}
</style>