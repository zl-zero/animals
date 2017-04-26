/* eslint-disable */
import * as state from './state';
import * as types from './mutations_type.js';
export default {
  [types.ADD_USER_INFO](state,_userInfo){
    state.userInfo = _userInfo;
  }
}
