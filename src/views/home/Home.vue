<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行','新款','经典']"
      class="tab-control"
      @tabclick="tabclick"
      ref="tabControl1"
      v-show="isShowTab"
    ></tab-control>
    <scroll
      class="scroll"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scrolltop="scrolltop"
      @pullingUp="pullingUp"
    >
      <home-swiper :banner="banner" @swiperImg="swiperImg"></home-swiper>
      <home-recommend-view :recommend="recommend"></home-recommend-view>
      <home-feature-view></home-feature-view>
      <tab-control :titles="['流行','新款','经典']" @tabclick="tabclick" ref="tabControl2"></tab-control>
      <goods-list :goods="goods[current].list"></goods-list>
    </scroll>
    <back-top @click.native="backtop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childrenComponents/HomeSwiper";
import HomeRecommendView from "./childrenComponents/HomeRecommendView";
import HomeFeatureView from "./childrenComponents/HomeFeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backtop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,

    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      current: "pop",
      isShowBackTop: false,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      tabOffsetTop: 0,
      isShowTab: false,
      pageY: 0,
    };
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata();
    // 2.请求goods数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    this.$bus.$on("imgLoad", () => {
      this.debounce(this.$refs.scroll.scroll.refresh(), 500);
    });
  },
  methods: {
    //网络请求
    getHomeMultidata() {
      getHomeMultidata().then((value) => {
        this.banner = value.data.banner.list;
        this.recommend = value.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((value) => {
        this.goods[type].list.push(...value.data.list);
        this.goods[type].page += 1;
      });
    },
    //防抖
    debounce(fun, delay) {
      let timer = null;
      return function (...arg) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          fun.apply(this, arg);
        }, delay);
      };
    },
    //事件监听
    tabclick(i) {
      switch (i) {
        case 0:
          this.current = "pop";
          break;
        case 1:
          this.current = "new";
          break;
        case 2:
          this.current = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = i;
      this.$refs.tabControl2.currentIndex = i;
    },
    backtop() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 300);
    },
    scrolltop(position) {
      this.isShowBackTop = -position.y > 1000 ? true : false;
      this.isShowTab = -position.y > this.tabOffsetTop;
    },
    pullingUp() {
      this.getHomeGoods(this.current);
    },
    swiperImg() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
  },
  activated() {
    this.$refs.scroll.scroll.scrollTo(0, this.pageY, 0);
    this.$refs.scroll.scroll.refresh();
  },
  deactivated() {
    this.pageY = this.$refs.scroll.scroll.y;
  },
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.tab-control {
  position: relative;
  z-index: 9;
}
.scroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
  overflow: hidden;
}
</style>