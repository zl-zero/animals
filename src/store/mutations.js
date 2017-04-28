/* eslint-disable */
import  {state} from './state';
import * as types from './mutations_type.js';
export default {
  [types.ADD_USER_INFO](state,payload){
    state.userInfo = payload;
  }
}
