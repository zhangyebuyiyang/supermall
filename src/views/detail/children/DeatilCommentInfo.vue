<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length!==0">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多</div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt />
      {{commentInfo.user.uname}}
    </div>
    <p class="info-describe">{{commentInfo.content}}</p>
    <div class="info-style">
      <span>{{commentInfo.style}}</span>
    </div>
    <div class="info-img">
      <img v-for="item in commentInfo.images" :src="item" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.comment-info {
  margin: 0 5px;
}
.info-header {
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  width: 100%;
  border-top: 2px solid #c3c5c6;
  border-bottom: 2px solid #c3c5c6;
}
.header-more {
  font-size: 14px;
  font-weight: 700;
}
.info-user {
  height: 100px;
  line-height: 100px;
  font-size: 18px;
  font-weight: 700;
}
.info-user img {
  width: 50px;
  vertical-align: middle;
  border-radius: 5px;
}
.info-style {
  margin: 10px;
  font-weight: 300;
  font-size: 14px;
}
.info-img img {
  width: 100px;
}
</style>