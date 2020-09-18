<template>
  <div class="base-info" v-if="Object.keys(goods).length!==0">
    <div class="one">{{goods.title}}</div>
    <div class="two">
      <span class="new">{{goods.newPrice}}</span>
      <span class="old">
        <del>{{goods.oldPrice}}</del>
      </span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="three">
      <span>{{goods.columns[0]}}</span>
      <span>⭐{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="four">
      <div>
        <img :src="goods.services[0].icon" alt />
        <span>{{goods.services[0].name}}</span>
      </div>
      <div>
        <img :src="goods.services[1].icon" alt />
        <span>{{goods.services[1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.one {
  font-size: 16px;
  font-weight: 700;
}
.two {
  height: 50px;
  line-height: 50px;
}
.two .new {
  font-size: 30px;
  color: red;
}
.two .old {
  margin: 0 10px;
}
.two .discount {
  background-color: pink;
  border-radius: 5px;
}
.three {
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.four {
  display: flex;
  height: 30px;
  line-height: 40px;
  font-size: 14px;
}
.four div {
  margin-left: 10px;
}
.four img {
  width: 20px;
}
</style>