import ajaxUtil from 'src/utils/ajaxUtil';
/* eslint-disable */
export default {
  //登录
  doLogin(data) {
    ajaxUtil.doPost('/animalUser/user/getToken', data , ( res ) => {
      console.log( res );
    }, ( err ) => {
      console.log( err );
    });
  }
};
