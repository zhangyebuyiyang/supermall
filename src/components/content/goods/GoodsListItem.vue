<template>
  <div class="goods-item" @click="toDetail">
    <img :src="showImg" alt @load="imgLoad" />
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="cfav">⭐{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgLoad() {
      if (this.$route.path.indexOf("/home")) {
        this.$bus.$emit("homeImgLoad");
      } else if (this.$route.path.indexOf("/detail")) {
        this.$bus.$emit("detailImgLoad");
      }
    },
    toDetail() {
      this.$router.push("/detail" + this.goodsitem.iid);
    },
  },
  computed: {
    showImg() {
      return this.goodsitem.image || this.goodsitem.show.img;
    },
  },
};
</script>

<style>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 45%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .cfav {
  position: relative;
}
</style>