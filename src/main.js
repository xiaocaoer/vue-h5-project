import Vue from 'vue'
import App from './App.vue'

//配置mock
import '@/mock'
import http from "@/http"
Vue.prototype.$http = http
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
