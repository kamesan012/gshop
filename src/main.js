/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import './mock/mockServer'
/* eslint-disable no-new */
// 注册全局组件标签
Vue.component(Button.name, Button) // <mt-button>
new Vue({
  el: '#app',
  render: h => h(App),
  router, // vue-router
  store // vue-x
})
