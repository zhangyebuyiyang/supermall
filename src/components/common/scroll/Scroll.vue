<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: {},
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
    });

    this.scroll.on("scroll", (position) => {
      this.$emit("scrolltop", position);
    });
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
      this.scroll.finishPullUp();
    });
  },
};
</script>

<style scoped>
</style>