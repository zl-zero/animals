import Vue from 'vue';
import Router from 'vue-router';

/* eslint-disable */
import wxConfigs from 'src/configs/wxConfigs';
import Util from 'src/utils/util';
import storeUtil from 'utils/storeUtils';

import axios from 'axios';
import VueAxios from 'vue-axios';
import settings from 'src/configs/settings';
import reqConfigs from 'src/configs/reqConfigs';

import routersConfig from './routerConfig';

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(Router);
Vue.use(VueAxios, axios);
Vue.use(Mint);

Vue.axios.defaults.baseURL = settings.baseURL;

const routers = new Router({
  mode: 'history',
  base: __dirname,
  routes: routersConfig.router
});

routers.beforeEach((to, from, next) => {
  const codes = Util.getQueryString('code');
  const token = storeUtil.getLocalStore('token');
  console.log(token);
  if (codes == null && token=='null') {
    /* eslint-disable */
    const uri = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + wxConfigs.appid
    + "&redirect_uri=" + encodeURI(wxConfigs.redirect_uri) + "&response_type=code&scope=" + wxConfigs.snsapi_userinfo + "&state=STATE#wechat_redirect";
    window.location.href = uri;
    next(false);
  } else if(token =='null'){
    reqConfigs.doLogin({
      code:codes
    });
    next();
  }else{
    next();
  }
});

export default routers;
