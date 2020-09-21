<template>
  <div class="bottom-computed">
    <div class="left">
      <div></div>
      <div>全选</div>
      <div>合计:￥{{}}</div>
    </div>
    <div class="right">去结算({{}})</div>
  </div>
</template>

<script>
export default {
  name: "CartBottomComputed",
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
}
</style>