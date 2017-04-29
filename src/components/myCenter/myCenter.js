/* eslint-disable */
export default {
  name: 'myCenter',
  data(){
    return {
      winSize:{
        width:'',
        height:'',
      },
      userInfo:{
        headImg:'',
        nickName:''
      },
      positionPoint:{
        backgroundImage:'',
        top:''
      },
      positionNick:{
        top:''
      }
    }
  },
  created(){
    this.userInfo.headImg = this.$store.state.userInfo.headImg;
    this.userInfo.nickName = this.$store.state.userInfo.nickName;
  },
  mounted(){
    const height = window.screen.height/3;
    this.winSize.width = document.body.clientWidth+'px';
    this.winSize.height = height+'px';
    this.positionPoint.backgroundImage = 'url('+this.userInfo.headImg+')';
    this.positionPoint.top = height/3.5+'px';
    this.positionNick.top = height/2+40+'px';
  }
}
