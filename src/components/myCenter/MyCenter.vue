<template>
  <div>
    <div class="user_back">
      <div :style="winSize" class="user_backgrounds"></div>
      <img :src="userInfo.headImg" class="user_head_background" :style="winSize"/>
      <div :style="winSize" class="user_back_down"></div>
      <div :style="positionPoint" class="user_head"></div>
      <span :style="positionNick">{{userInfo.nickName}}</span>
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
  import MyCenter from './myCenter.js';
  export default {
    ...MyCenter
  }
</script>
<style lang="scss">
  @import './myCenter.scss';
</style>
