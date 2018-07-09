import Vue from 'vue'
import Router from 'vue-router'

const Index = resolve => require(['@/view/index'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Index',
      name: 'Index',
      component: Index,
      meta: {
        title: '潮机头条'
      }
    }
  ]
})
