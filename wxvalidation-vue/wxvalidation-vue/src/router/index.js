import Vue from 'vue'
import Router from 'vue-router'
//微信验证码
import Testaly from '@/components/Testaly'

Vue.use(Router)

export default new Router({
  routes: [
    // 防伪验证
    {
      path: '/testaly',
      component: Testaly,
      alias:'/'
    },
  ]
})
