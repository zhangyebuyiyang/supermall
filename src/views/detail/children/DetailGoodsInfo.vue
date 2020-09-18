<template>
  <div v-if="Object.keys(detailInfo).length!==0" class="goods-info">
    <div class="desc">
      <div class="top"></div>
      <div>{{detailInfo.desc}}</div>
      <div class="bottom"></div>
    </div>

    <div>{{detailInfo.detailImage[0].key}}</div>
    <div class="goods-info">
      <img
        v-for="(item,index) in detailInfo.detailImage[0].list"
        :key="index"
        @load="imgLoad"
        :src="item"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0,
    };
  },
  methods: {
    imgLoad() {
      this.$emit("imgLoad");
    },
  },
};
</script >

<style scoped>
.goods-info {
  padding-top: 10px;
}
.desc {
  overflow: hidden;
}
.top {
  width: 40%;
  height: 1px;
  border-top: 2px solid #ccc;
  margin-bottom: 5px;
}
.bottom {
  width: 40%;
  height: 1px;
  border-top: 2px solid #ccc;
  margin: 5px 0;
  float: right;
}

.goods-info img {
  width: 100%;
}
</style>