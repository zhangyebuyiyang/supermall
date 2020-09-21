<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{$store.state.cartList.length}})</div>
    </nav-bar>
    <scroll class="cart-scroll" ref="scroll">
      <cart-list-item v-for="(item,index) in $store.state.cartList" :item="item" :index="index"></cart-list-item>
    </scroll>
    <cart-bottom-computed class="bottom-computed"></cart-bottom-computed>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import CartListItem from "./children/CartListItem";
import CartBottomComputed from "./children/CartBottomComputed";
export default {
  name: "Cart",
  components: {
    NavBar,
    Scroll,

    CartListItem,
    CartBottomComputed,
  },
  activated() {
    this.$refs.scroll.scroll.refresh();
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.cart {
  position: relative;
  height: 100vh;
}
.cart-scroll {
  position: absolute;
  top: 44px;
  bottom: 84px;
  right: 0;
  left: 0;
  overflow: hidden;
}
.bottom-computed {
  position: absolute;
  bottom: 44px;
  right: 0;
  left: 0;
}
</style>