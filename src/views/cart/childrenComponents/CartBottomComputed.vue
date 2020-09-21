<template>
  <div class="bottom-computed">
    <div class="left">
      <div :class="{active:isShow}" @click="checkClick"></div>
      <div>全选</div>
      <div>合计:￥{{totalPrice}}</div>
    </div>
    <div class="right">去结算({{totalLength}})</div>
  </div>
</template>

<script>
export default {
  name: "CartBottomComputed",
  methods: {
    checkClick() {
      if (this.isShow) {
        this.$store.state.cartList.forEach((item) => (item.checked = false));
      } else {
        this.$store.state.cartList.forEach((item) => {
          item.checked = true;
        });
      }
    },
  },
  computed: {
    totalPrice() {
      return this.$store.state.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.cunt;
        }, 0);
    },
    totalLength() {
      return this.$store.state.cartList.filter((item) => {
        return item.checked;
      }).length;
    },
    isShow() {
      if (this.$store.state.cartList.length == 0) return false;
      return !this.$store.state.cartList.find((item) => {
        return !item.checked;
      });
    },
  },
};
</script>

<style scoped>
.bottom-computed {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.left {
  flex: 7;
  display: flex;
  background-color: #ccc;
}
.left div:nth-child(1) {
  width: 15px;
  height: 15px;
  border-radius: 7px;
  border: 1px solid #aaa;
  margin-top: 12px;
}
.left div:nth-child(2) {
  margin: 0 10px 0 2px;
}
.right {
  flex: 3;
  background-color: red;
  color: #fff;
}
.active {
  background-color: red;
}
</style>