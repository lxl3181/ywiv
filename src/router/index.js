import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: (resolve) => require(['@/page/Login'], resolve)
    },
    {
      path: '/index',
      name: 'Index',
      component: (resolve) => require(['@/page/Index'], resolve)
    }
  ]
})
