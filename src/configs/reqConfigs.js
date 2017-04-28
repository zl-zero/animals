/* eslint-disable */
import ajaxUtil from 'utils/ajaxUtil';
import storeUtil from 'utils/storeUtils';
import * as inter_path from './interfaceConfigs';

export default {
  //登录
  doLogin(data,callback) {
    ajaxUtil.doPost(inter_path.GET_TOKEN, data , ( res ) => {
      callback(res);
    }, ( err ) => {
      console.log( err );
    });
  },
  doTopicList(){
    ajaxUtil.doPost(inter_path.TOPIC_LIST,'',(res)=>{
      console.log(res);
    }, ( err ) => {
      console.log( err );
    });
  }
};
