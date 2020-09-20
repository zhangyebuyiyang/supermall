<template>
  <div class="tab-control">
    <div
      v-for="(item,i) in titles"
      class="tab-control-item"
      :class="{active:currentIndex===i}"
      @click="targetTab(i)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    targetTab(i) {
      this.currentIndex = i;
      this.$emit("tabclick", i);
    },
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  height: 44px;
  line-height: 44px;
  font-size: 15px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
  text-align: center;
}
.active {
  color: var(--color-high-text);
}
.active span {
  padding: 5px;
  border-bottom: 2px solid red;
}
</style>