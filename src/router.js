import Vue from 'vue'
import Router from 'vue-router'
import Step1 from './views/step-1.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/1'
    },
    {
      path: '/1',
      name: 'step-1',
      component: Step1
    }
  ]
})
