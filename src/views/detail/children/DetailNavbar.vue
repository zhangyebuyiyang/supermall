<template>
  <div class="deatail-navbar">
    <nav-bar>
      <div slot="left" @click="backClick"><</div>
      <div slot="center" class="center">
        <div
          v-for="(item,i) in titles"
          class="center-item"
          @click="centerclick(i)"
          :class="{active:currentIndex===i}"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavbar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    centerclick(i) {
      this.currentIndex = i;
      this.$emit("centerClick", i);
    },
    backClick() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.detail-navbar {
  background-color: #fff;
}
.center {
  display: flex;
}
.center-item {
  flex: 1;
  text-align: center;
}
.active {
  color: red;
}
</style>