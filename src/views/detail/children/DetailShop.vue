<template>
  <div class="shop">
    <div class="one">
      <img :src="shop.logo" alt />
      <span>{{shop.name}}</span>
    </div>
    <div class="two">
      <div class="left">
        {{shop.fans}}
        <p>总销量</p>
      </div>
      <div class="center">
        {{shop.goodsCount}}
        <p>全部宝贝</p>
      </div>
      <ul class="right">
        <li v-for="item in shop.score">
          <span>{{item.name}}</span>
          <span>{{item.score}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShop",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.shop {
  padding: 30px 0 50px 0;
  border-top: 3px solid #ccc;
  border-bottom: 3px solid #ccc;
}
.one img {
  width: 60px;
  vertical-align: middle;
}
.one {
  font-size: 19px;
}
.two {
  display: flex;
  margin-top: 15px;
}
.left,
.center {
  flex: 1;
  text-align: center;
}

.right {
  flex: 2;
  padding-left: 30px;
  margin-top: -20px;
  border-left: 1px solid #ccc;
}
.right li {
  height: 30px;
  line-height: 30px;
}
</style>