<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{red:isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
  },
  methods: {
    itemclick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
}
.red {
  color: red;
}
</style>