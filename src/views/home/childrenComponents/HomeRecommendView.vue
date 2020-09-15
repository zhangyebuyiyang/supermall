<template>
  <div class="home-recommend-view">
    <div v-for="item in recommend" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt />
      </a>
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.home-recommend-view {
  display: flex;
  font-size: 14px;
  padding: 15px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommend-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.recommend-item img {
  width: 70px;
}
</style>