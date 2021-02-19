<template>
  <div class="app">
    <css-picture :cssCode="cssCode" :htmlCode="htmlCode" />
  </div>
</template>

<script>
import CssPicture from "components/CssPicture";

import cssCode from "./common/cssCode";
import htmlCode from "./common/htmlCode";

export default {
  name: "App",
  components: {
    CssPicture,
  },
  data() {
    return {
      cssCode: cssCode,
      htmlCode: htmlCode,
    };
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
