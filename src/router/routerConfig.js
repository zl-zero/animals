import Comps from "components/";

/* eslint-disable */
export default {
  router: [
    {
      path:'/',
      name:'index',
      component: Comps.Home
    },
    {
      path:'/index',
      name:'index',
      component: Comps.Home,
      children: [
        {
          path:'/myCenter',
          name:'myCenter',
          component: Comps.MyCenter
        }]
    }
  ]
}
