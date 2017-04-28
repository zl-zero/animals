/* eslint-disable */
export default {
  name: 'myCenter',
  data(){
    return {
      backgroundImgs:{
        width:'',
        height:'',
        backgroundImage:'',
        backgroundSize:'cover'
      },
      userInfo:{
        headImg:'',
        nickName:''
      }
    }
  },
  created(){
    this.userInfo.headImg = this.$store.state.userInfo.headImg;
    this.userInfo.nickName = this.$store.state.userInfo.nickName;
    this.backgroundImgs.backgroundImage = 'url('+this.$store.state.userInfo.headImg+')';
  },
  mounted(){
    this.backgroundImgs.width = document.body.clientWidth+'px';
    this.backgroundImgs.height = window.screen.height/2.5+'px';
  }
}
