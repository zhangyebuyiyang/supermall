<template>
  <div class="detail">
    <detail-navbar></detail-navbar>
    <scroll class="detail-scroll" ref="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop :shop="shop"></detail-shop>
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad"></detail-goods-info>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

import DetailNavbar from "./children/DetailNavbar";
import DetailSwiper from "./children/DetailSwiper";
import DetailBaseInfo from "./children/DetailBaseInfo";
import DetailShop from "./children/DetailShop";
import DetailGoodsInfo from "./children/DetailGoodsInfo";

import { getDetail, Goods, Shop } from "network/detail";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
    };
  },
  components: {
    Scroll,

    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShop,
    DetailGoodsInfo,
  },
  created() {
    this.iid = this.$route.params.iid;

    getDetail(this.iid).then((value) => {
      console.log(value);
      this.topImages = value.result.itemInfo.topImages;
      this.goods = new Goods(
        value.result.itemInfo,
        value.result.columns,
        value.result.shopInfo.services
      );
      this.shop = new Shop(value.result.shopInfo);
      this.detailInfo = value.result.detailInfo;
    });
  },
  activated() {},
  methods: {
    imgLoad() {
      this.$refs.scroll.scroll.refresh();
    },
  },
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-scroll {
  position: absolute;
  top: 44px;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
}
</style>