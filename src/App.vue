<template>
  <div id="app">
    <router-view></router-view>
    <mt-tabbar fixed v-model="selected" v-if="isTabBar">
      <mt-tab-item id="information" >
        <img slot="icon" :src="icons.index_icons">
        <span class="fontColor">首页</span>
      </mt-tab-item>
      <mt-tab-item id="myCenter" >
        <img slot="icon" :src="icons.my_icons">
        <span class="fontColor">我的</span>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'app',
  data() {
    return {
      selected: 'information',
      isTabBar:true,
      icons:{
        index_icons:require('./assets/home_sel.png'),
        my_icons:require('./assets/my.png')
      }
    };
  },
  watch:{
    '$route'(to, from){
      if(to.name == 'information' || to.name == 'myCenter'){
        this.isTabBar = true;
      }else{
        this.isTabBar = false;
      }
    },
    selected(val,oldVal){
      if(val == 'information'){
        this.restIcons();
        this.icons.index_icons = require('./assets/home_sel.png');
      }
      if(val == 'myCenter'){
        this.restIcons();
        this.icons.my_icons = require('./assets/my_sel.png');
      }
      this.selected = val;
      this.$router.push({name: val});
    }
  },
  methods:{
    restIcons(){
      this.icons = {
        index_icons:require('./assets/home.png'),
        my_icons:require('./assets/my.png')
      }
    }
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.mint-tabbar > .mint-tab-item.is-selected .fontColor{
  color:#724bda !important;
}
.mint-tabbar > .mint-tab-item.is-selected{
  color:#724bda !important;
}
.fontColor{
  color:#bfbfbf !important;
}

</style>
