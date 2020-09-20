<template>
  <div class="detail">
    <detail-navbar @centerClick="centerClick" ref="navbar"></detail-navbar>
    <scroll class="detail-scroll" ref="scroll" @scrolltop="scrolltop" :probeType="3">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop :shop="shop"></detail-shop>
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad"></detail-goods-info>
      <detail-item-params :item-params="itemParams" ref="params"></detail-item-params>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommend" ref="goods"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
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
import DetailBottomBar from "./children/DetailBottomBar";

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
      centerTopYs: [],
      getThemeTopY: null,
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
    DetailBottomBar,
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
    });

    this.getThemeTopY = this.debounce(() => {
      this.centerTopYs = [];
      this.centerTopYs.push(0);
      this.centerTopYs.push(this.$refs.params.$el.offsetTop);
      this.centerTopYs.push(this.$refs.comment.$el.offsetTop);
      this.centerTopYs.push(this.$refs.goods.$el.offsetTop);
      console.log(this.centerTopYs);
    }, 200);
  },
  mounted() {
    this.$bus.$on("datailImgLoad", () => {
      this.debounce(this.$refs.scroll.scroll.refresh(), 500);
    });
  },
  activated() {},
  methods: {
    imgLoad() {
      this.$refs.scroll.scroll.refresh();
      this.getThemeTopY();
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
    centerClick(i) {
      this.$refs.scroll.scroll.scrollTo(0, -this.centerTopYs[i], 200);
    },
    scrolltop(position) {
      if (
        -position.y + 1 > this.centerTopYs[0] &&
        -position.y < this.centerTopYs[1]
      ) {
        this.$refs.navbar.currentIndex = 0;
      } else if (
        -position.y + 1 > this.centerTopYs[1] &&
        -position.y < this.centerTopYs[2]
      ) {
        this.$refs.navbar.currentIndex = 1;
      } else if (
        -position.y + 1 > this.centerTopYs[2] &&
        -position.y < this.centerTopYs[3]
      ) {
        this.$refs.navbar.currentIndex = 2;
      } else if (-position.y + 1 > this.centerTopYs[3]) {
        this.$refs.navbar.currentIndex = 3;
      }
    },
    addCart() {
      let cartInfo = {};
      cartInfo.image = this.topImages[0];
      cartInfo.title = this.goods.title;
      cartInfo.desc = this.goods.desc;
      cartInfo.price = this.goods.realPrice;
      cartInfo.iid = this.iid;
      this.$store.commit("addCartList", cartInfo);
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
  height: calc(100% - 44px - 44px);
  overflow: hidden;
}
</style>