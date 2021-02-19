<template>
  <div class="picture">
    <header-item @play="play" @speedAdd="speedAdd" @down="down" @end="end" />
    <div class="main">
      <left-code :code="cssCode" :speed="speed" ref="leftCode" />
      <right-view :structure="htmlCode" />
    </div>
  </div>
</template>

<script>
import leftCode from "./pictureItem/leftCode";
import rightView from "./pictureItem/rightView";
import headerItem from "./pictureItem/headerItem";
export default {
  name: "App",
  components: {
    leftCode,
    rightView,
    headerItem,
  },
  data() {
    return {
      speed: 1,
    };
  },
  props: {
    htmlCode: {
      type: String,
      default: "",
    },
    cssCode: {
      type: String,
      default: "",
    },
  },
  methods: {
    play() {
      this.$refs.leftCode.play();
    },
    speedAdd(params) {
      this.speed = params;
    },
    down(params) {
      this.speed = params;
    },
    end() {
      this.$refs.leftCode.end();
    },
  },
};
</script>

<style lang="less" class="aaa">
.header {
  height: 60px;
  border-bottom: solid 3px #07beea;
  margin-bottom: 20px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.5);
}
.main {
  display: flex;
  overflow: hidden;
}
.code {
  width: 50vw;
}
.view {
  flex: 1;
}
</style>
