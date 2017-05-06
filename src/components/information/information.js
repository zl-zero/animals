/* eslint-disable */
import req from 'configs/reqConfigs';
export default {
  name: 'information',
  data(){
    return {
      winHeight:0,
      pages:{
        numberOfPerPage:2,
        pageNo:0
      },
      allLoaded:false,
      list:[],
      bottomStatus:false,
      icons:{
        browers:require('assets/browse.png')
      }
    }
  },
  created(){

  },
  mounted(){
    req.doTopicList(this.pages,(res)=>{
      this.list = res;
    });
    this.winHeight = document.documentElement.clientHeight;
  },
  methods:{
    loadTop(){
      this.pages.pageNo = 0 ;
      this.list = [];
      this.allLoaded = false;
      req.doTopicList(this.pages,(res)=>{
        this.list = res;
      });
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() {
      const self = this;
      ++ this.pages.pageNo;
      req.doTopicList(this.pages,(res)=>{
        if(res.length>0){
          for(const i =0;i<res.length;i++){
            self.list.push(res[i])
          }
        }
      });
      this.$refs.loadmore.onBottomLoaded();
    },
    handleBottomChange(status){
      if(status == 'drop'){
        this.bottomStatus = true;
      }else{
        this.bottomStatus = false;
      }
    }
  }
}
