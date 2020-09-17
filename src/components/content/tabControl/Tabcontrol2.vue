<template>
  <div class="tab-control">
    <div v-for="(item,i) in titles" @click="tabclick(i)" :class="{active:this.currentIndex==i}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabcontrol2",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    tabclick(i) {
      this.currentIndex = i;
      this.$emit("事件名", i);
    },
  },
};
</script>

<style>
</style>