<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banner">
        <a :href="item.link">
          <img :src="item.image" alt @load="swiperImg" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  data() {
    return {
      flg: false,
    };
  },
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    swiperImg() {
      if (!this.flg) {
        this.$emit("swiperImg");
        this.flg = true;
      }
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style>
</style>