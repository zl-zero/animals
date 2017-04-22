<template>
  <div>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item :id="selected_id">
        <router-view></router-view>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="index" >
        <div :click="tabs('index')">
          外卖
        </div>
      </mt-tab-item>
      <mt-tab-item id="myCenter" >
        <div :click="tabs('myCenter')">我的
        </div>
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
