/* eslint-disable */
import req from 'configs/reqConfigs';
export default {
  name: 'information',
  created(){
    req.doTopicList();
  }
}
