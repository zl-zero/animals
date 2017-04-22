import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

/* eslint-disable */
export default {
  doPost(uri,data,success_callback,error_callback){
    Vue.axios.post(uri,data).then(function (response) {
      console.log(response);
    }).catch(function (error) {
       console.log(error);
    });
  }
};
