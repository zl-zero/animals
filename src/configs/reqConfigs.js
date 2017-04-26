/* eslint-disable */
import ajaxUtil from 'utils/ajaxUtil';
import storeUtil from 'utils/storeUtils';

export default {
  //登录
  doLogin(data,callback) {
    ajaxUtil.doPost('/animalUser/user/getToken', data , ( res ) => {
      callback(res);
    }, ( err ) => {
      console.log( err );
    });
  }
};
