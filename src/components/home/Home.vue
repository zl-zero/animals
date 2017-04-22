<template>
  <div>
    <router-view></router-view>

    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="information" >
          外卖
      </mt-tab-item>
      <mt-tab-item id="myCenter" >我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  /* eslint-disable */
  import Home from './home.js';
  export default {
    ...Home
  }
</script>
<style lang="scss">
</style>
