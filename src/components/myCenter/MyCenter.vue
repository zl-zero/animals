<template>
  <div>
    <div class="user_back">
      <div :style="backgroundImgs" class="user_backgrounds">
        <img :src="userInfo.headImg" class="user_headImg" />
      </div>
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
