import Vue from 'vue'
import Router from 'vue-router'

const Index = resolve => require(['@/view/index'], resolve)
const Zjfp = resolve => require(['@/view/zjfp'], resolve)
const Zjsh = resolve => require(['@/view/zjsh'], resolve)
const Zjfh = resolve => require(['@/view/zjfh'], resolve)
const Fhjg = resolve => require(['@/view/fhjg'], resolve)
const Audio = resolve => require(['@/view/audio'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Index',
      name: 'Index',
      component: Index,
      meta: {
        title: '智能质检系统'
      },
      children: [
        {
          path: 'zjfp',
          component: Zjfp,
          meta: {
            title: '质检分配'
          }
        },
        {
          path: 'zjsh',
          component: Zjsh,
          meta: {
            title: '质检审核'
          }
        },
        {
          path: 'zjfh',
          component: Zjfh,
          meta: {
            title: '质检复核'
          }
        },
        {
          path: 'fhjg',
          component: Fhjg,
          meta: {
            title: '复核结果'
          }
        },
        {
          path: 'audio',
          component: Audio,
          meta: {
            title: '质检播放'
          }
        }
      ]
    }
  ]
})
