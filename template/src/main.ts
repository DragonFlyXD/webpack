import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Api from './api'

import './common/stylus/common.styl'

Vue.prototype.$api = Api

Vue.config.productionTip = false

const app: Vue = new Vue({
  el: '#app',
  router,
  store,
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
