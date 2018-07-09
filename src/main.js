import Vue from 'vue'
import App from './App'
import router from './router'
import http from '@/fetch/api'
import fastclick from 'fastclick'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)

Vue.prototype.$http = http
Vue.config.productionTip = false

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    fastclick.attach(document.body)
  }, false)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
