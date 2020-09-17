<template>
  <div class="detail">
    <h2>{{id}}</h2>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      id: null,
    };
  },
  activated() {
    this.id = this.$route.params.id;
  },
};
</script>

<style>
</style>