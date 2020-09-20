<template>
  <div class="bottom-bar">
    <div>客服</div>
    <div>店铺</div>
    <div>收藏</div>
    <div class="cart" @click="addCart">加入购物车</div>
    <div class="shopping">购买</div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addCart() {
      this.$emit("addCart");
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
}
.bottom-bar > div {
  flex: 1;
  text-align: center;
}
.bottom-bar .cart {
  background-color: orange;
  flex: 2;
}
.shopping {
  background-color: pink;
}
</style>