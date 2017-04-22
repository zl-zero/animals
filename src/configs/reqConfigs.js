/* eslint-disable */
import ajaxUtil from 'utils/ajaxUtil';
import storeUtil from 'utils/storeUtils';

export default {
  //登录
  doLogin(data) {
    ajaxUtil.doPost('/animalUser/user/getToken', data , ( res ) => {
      storeUtil.addLocalStore('token',res.response.token); 
      console.log( res );
    }, ( err ) => {
      console.log( err );
    });
  }
};
