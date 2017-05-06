<template>
  <div class="container" >
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore"
    @bottom-status-change="handleBottomChange"
    :style="{height:winHeight+'px'}">
      <section v-for="item in list" :key="item.id">
        <div v-if="item.imageList.length==1" class="list" :style="{height:'110px',alignItems: 'flex-start'}">
          <div v-for="imgs in item.imageList">
            <img class="list-img" :src=imgs.img />
          </div>
          <div class="upDowns">
            <div class="title">{{item.title}}</div>
            <div class="icons-bottoms">
              <img slot="icon" class="browers-icons" :src="icons.browers"/>
              <span>11</span>
            </div>
          </div>
        </div>
        <div v-if="item.imageList.length>1" class="list" :style="{height:'100%',flexWrap: 'wrap'}">
          <div class="titles" :style="{flexBasis: '100%'}">{{item.title}}</div>
          <div v-for="imgs in item.imageList" >
            <img class="list-img" :src=imgs.img />
          </div>
          <div class="icons-bottom">
            <img slot="icon" class="browers-icons" :src="icons.browers"/>
            <span>11</span>
          </div>
        </div>
      </section>
      <div slot="bottom" class="mint-loadmore-bottom">
        <span v-if="bottomStatus">上拉刷新</span>
      </div>
    </mt-loadmore>
  </div>
</template>
<script>
  /* eslint-disable */
  import Information from './information.js';
  export default {
    ...Information
  }
</script>
<style lang="scss">
  @import './information.scss';
</style>
