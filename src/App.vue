<template>
  <div class="app">
    <css-picture></css-picture>
  </div>
</template>

<script>
import CssPicture from "components/CssPicture";
export default {
  name: "App",
  components: {
    CssPicture,
  },
  mounted() {},
};
</script>

<style lang="less" class="aaa">
@import url("assets/css/default.css");
.app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
