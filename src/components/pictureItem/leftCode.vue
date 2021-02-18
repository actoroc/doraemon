<template>
  <div class="code">
    <pre class="write" ref="write"></pre>
  </div>
</template>

<script>
export default {
  name: "codes",
  data() {
    return {
      runCode: null,
      n: 0,
      isStop: false,
      onOff: true,
      endRestart: true,
      style: null,
    };
  },
  props: {
    code: {
      type: String,
      default: "",
    },
    speed: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    write(code) {
      this.style = document.createElement("style");
      window.document.body.appendChild(this.style);
      let _this = this;
      this.runCode = setTimeout(function run() {
        _this.n += _this._props.speed;
        _this.$refs.write.innerHTML = code.substring(0, _this.n);
        _this.style.innerHTML = code.substring(0, _this.n);
        _this.$refs.write.scrollTop = _this.$refs.write.scrollHeight;
        if (_this.n < code.length) {
          if (_this.isStop) {
            clearTimeout(_this.runCode);
          } else {
            _this.runCode = setTimeout(run, 10);
          }
        } else {
          clearTimeout(_this.runCode);
        }
      }, 10);
    },
    play() {
      if (this.onOff) {
        this.write(this.code);
        this.onOff = !this.onOff;
        this.isStop = false;
      } else {
        this.isStop = !this.isStop;
        this.onOff = !this.onOff;
      }
    },
    end() {
      if (this.endRestart) {
        this.n = this.code.length;
        this.endRestart = !this.endRestart;
      } else {
        this.n = 0;
        this.$refs.write.innerHTML = "";
        this.style.innerHTML = "";
        this.write(this.code);
        this.endRestart = !this.endRestart;
      }
    },
  },
};
</script>

<style lang='less' scoped >
.code {
  box-sizing: border-box;
  padding: 15px 0 0 40px;
}
.write {
  font-size: 8px;
  overflow: hidden;
  height: 85vh;
  font-weight: 600;
  word-break: break-all;
  word-wrap: break-word;
  white-space: pre-wrap;
}
</style>
