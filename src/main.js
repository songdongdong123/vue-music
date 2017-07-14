import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'

import fastclick from 'fastclick' // 用来解决移动端点击300毫秒的延迟

import 'common/stylus/index.styl'

fastclick.attach(document.body) // 取消body下面所有点击300毫秒延迟

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
