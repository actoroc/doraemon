<template>
  <div class="view" ref="view"></div>
</template>

<script>
export default {
  name: "rightView",
  data() {
    return {};
  },
  props: {
    structure: {
      type: String,
      default: "",
    },
  },
  mounted() {
    this.$refs.view.innerHTML = this.structure;
  },
};
</script>

<style lang='less' scoped>
.view {
  position: relative;
}
</style>
