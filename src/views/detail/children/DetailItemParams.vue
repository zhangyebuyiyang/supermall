<template>
  <div class="item-params" v-if="Object.keys(itemParams).length !==0">
    <table class="top" rules="rows">
      <tr v-for="item in itemParams.rule.tables[0]">
        <td v-for="tdItem in item">{{tdItem}}</td>
      </tr>
    </table>
    <table class="bottom" rules="rows">
      <tr v-for="item in itemParams.info.set">
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailItemParams",
  props: {
    itemParams: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.top,
.bottom {
  width: 95%;
  margin: 10px auto;
}
.top tr,
.bottom tr {
  height: 35px;
  line-height: 35px;
  width: 100%;
}
.top td {
  width: 20%;
}

.bottom {
  border-top: 2px solid #c3c3c3;
}

.bottom td:first-child {
  width: 30%;
}
.bottom td:last-child {
  width: 70%;
  color: red;
}
</style>