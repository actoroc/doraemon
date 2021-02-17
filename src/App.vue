<template>
  <div class="app">
    <header-item></header-item>
    <div class="main">
      <left-code></left-code>
      <right-view></right-view>
    </div>
  </div>
</template>

<script>
import leftCode from "components/leftCode";
import rightView from "components/rightView";
import headerItem from "components/headerItem";
export default {
  name: "App",
  components: {
    leftCode,
    rightView,
    headerItem,
  },
  mounted() {},
};
</script>

<style lang="less" class="aaa">
@import url("assets/css/default.css");

</style>
