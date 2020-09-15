<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend-view :recommend="recommend"></home-recommend-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childrenComponents/HomeSwiper";
import HomeRecommendView from "./childrenComponents/HomeRecommendView";

import { getHomeMultidata } from "network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
  },
  data() {
    return {
      banner: [],
      recommend: [],
    };
  },
  created() {
    //1.请求多个数据
    getHomeMultidata().then((value) => {
      console.log(value);
      this.banner = value.data.banner.list;
      this.recommend = value.data.recommend.list;
    });
  },
};
</script>

<style>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>