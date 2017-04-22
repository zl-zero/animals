/* eslint-disable */
export default {
  name: 'index',
  data() {
    return {
      selected: 'index'
    };
  },
  watch:{
    selected(val,oldVal){
      this.selected = val;
      // if(val == "myCenter"){
      //   this.selected_id = val;
      console.log(val);
        this.$router.push({name: val});
      // }
    }
  },
  methods:{
    updateCurMenu(route){
      console.log(route);
    }
  }
}
