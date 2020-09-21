<template>
  <div class="cart-list-item">
    <div class="select">
      <div class="select-icon" :class="{active:item.checked}" @click="selectClick"></div>
    </div>
    <div class="img">
      <img :src="item.image" alt />
    </div>
    <div class="info">
      <div class="info-title">{{item.title}}</div>
      <div class="info-desc">{{item.desc}}</div>
      <div class="info-price">
        <span>￥{{item.price}}</span>
        <span>x{{item.cunt}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartListName",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {};
  },
  methods: {
    selectClick() {
      this.item.checked = !this.item.checked;
    },
  },
};
</script>

<style scoped>
.cart-list-item {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
  padding: 10px;
}
.img img {
  flex: 1;
  width: 100px;
  border-radius: 5px;
}
.select {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
}
.select-icon {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid #aaa;
}
.active {
  background-color: red;
}
.info {
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.info-title {
  font-size: 16px;
}
.info-desc {
  font-size: 14px;
  font-weight: 400;
}
.info-price span:first-child {
  color: red;
}
.info-price span:last-child {
  float: right;
  font-weight: 400;
}
</style>