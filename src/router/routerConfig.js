import Comps from "components/";

/* eslint-disable */
export default {
  router: [
    {
      path:'/',
      name:'index',
      redirect: '/information',
      component: Comps.Home
    },
    {
      path:'/index',
      name:'index',
      redirect: '/information',
      component: Comps.Home,
      children: [
        {
          path:'/Information',
          name:'information',
          component:Comps.Information
        },
        {
          path:'/myCenter',
          name:'myCenter',
          component: Comps.MyCenter
        }]
    }
  ]
}
