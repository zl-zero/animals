/* eslint-disable */
import ajaxUtil from 'utils/ajaxUtil';
import storeUtil from 'utils/storeUtils';
import settings from 'src/configs/settings';

export default {
  //登录
  doLogin(data,callback) {
    ajaxUtil.doPost(settings.GET_TOKEN, data , ( res ) => {
      callback(res);
    }, ( err ) => {
      console.log( err );
    });
  },
  doTopicList(data,callback){
    ajaxUtil.doPost(settings.TOPIC_LIST,data,(res)=>{
      callback(res.response.content);
    }, ( err ) => {
      console.log( err );
    });
  }
};
