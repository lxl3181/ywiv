import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: (resolve) => require(['@/components/Index/Login'], resolve)
    },
    {
      path: '/three',
      name: 'Three',
      component: (resolve) => require(['@/components/Index/Three'], resolve)
    }
  ]
})
