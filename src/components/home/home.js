/* eslint-disable */
export default {
  name: 'index',
  data() {
    return {
      selected: 'index',
      selected_id: 'index'
    };
  },
  watch:{
    $route(to,from){
      this.updateCurMenu(to);
    },
    selected(val,oldVal){
      this.selected = val;
      // if(val == "myCenter"){
      //   this.selected_id = val;
      //   this.$router.push({name: val});
      // }
    }
  },
  methods:{
    updateCurMenu(route){
      console.log(route);
    },
    tabs(name){
      console.log(name);
      if(this.selected == 'myCenter'){
        this.$router.push({name:this.selected});
      }
    }
  }
}
