<template>
  <div class="detail">
    <detail-navbar></detail-navbar>
    <scroll class="detail-scroll" ref="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop :shop="shop"></detail-shop>
      <!-- <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad"></detail-goods-info> -->
      <detail-item-params :item-params="itemParams"></detail-item-params>
      <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
      <goods-list :goods="recommend"></goods-list>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";

import DetailNavbar from "./children/DetailNavbar";
import DetailSwiper from "./children/DetailSwiper";
import DetailBaseInfo from "./children/DetailBaseInfo";
import DetailShop from "./children/DetailShop";
import DetailGoodsInfo from "./children/DetailGoodsInfo";
import DetailItemParams from "./children/DetailItemParams";
import DetailCommentInfo from "./children/DeatilCommentInfo";

import { getDetail, Goods, Shop, getRecommend } from "network/detail";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      recommend: [],
    };
  },
  components: {
    Scroll,
    GoodsList,

    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShop,
    DetailGoodsInfo,
    DetailItemParams,
    DetailCommentInfo,
  },
  created() {
    this.iid = this.$route.params.iid;

    getDetail(this.iid).then((value) => {
      this.topImages = value.result.itemInfo.topImages;
      this.goods = new Goods(
        value.result.itemInfo,
        value.result.columns,
        value.result.shopInfo.services
      );
      this.shop = new Shop(value.result.shopInfo);
      this.detailInfo = value.result.detailInfo;
      this.itemParams = value.result.itemParams;
      if (value.result.rate.cRate !== 0) {
        this.commentInfo = value.result.rate.list[0];
      }
    });
    getRecommend().then((value) => {
      this.recommend = value.data.list;
      console.log(value);
    });
  },
  mounted() {},
  activated() {},
  methods: {
    imgLoad() {
      this.$refs.scroll.scroll.refresh();
    },
    debounce(fun, delay) {
      let timer = null;
      return function (...arg) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          fun.apply(this, arg);
        }, delay);
      };
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
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>