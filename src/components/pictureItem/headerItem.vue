<template>
  <div class="header">
    <h2>用CSS画画</h2>
    <button @click="play">{{ onOff ? "播放" : "暂停" }}</button>
    <button @click="speedAdd">加速 ×{{ speed }}</button>
    <button @click="down">减速</button>
    <button @click="end">{{ onOff1 ? "结束" : "重播" }}</button>
  </div>
</template>

<script>
export default {
  name: "headerItem",
  data() {
    return {
      speed: 1,
      onOff: true,
      onOff1: true,
    };
  },
  methods: {
    play() {
      this.onOff = !this.onOff;
      this.$emit("play");
    },
    speedAdd() {
      if (this.speed >= 10) {
        this.speed = 10;
        alert("最大速度");
      } else {
        this.speed++;
        this.$emit("speedAdd", this.speed);
      }
    },
    down() {
      if (this.speed <= 1) {
        this.speed = 1;
        alert("最小速度");
      } else {
        this.speed--;
        this.$emit("down", this.speed);
      }
    },
    end() {
      this.onOff1 = !this.onOff1;
      this.$emit("end");
    },
  },
};
</script>

<style lang='less' scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    border: 0;
    border-radius: 10px;
    background: #07beea;
    color: #fff;
    height: 30px;
    width: 60px;
    margin-left: 10px;
    outline: none;
  }
}
</style>
