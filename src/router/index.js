import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import wxConfigs from '@/configs/wxConfigs';
import Util from '@/appUtils/util';

Vue.use(Router);

const routers = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
});

routers.beforeEach((to, from, next) => {
  const code = Util.getQueryString('code');
  if (code == null) {
    /* eslint-disable */
    const uri = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + wxConfigs.appid
    + "&redirect_uri=" + wxConfigs.redirect_uri + "&response_type=code&scope=" + wxConfigs.snsapi_userinfo + "&state=STATE#wechat_redirect";
    window.location.href = uri;
    next(false);
  } else {
    console.log(code);
  }
});

export default routers;
