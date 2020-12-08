import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
import bootstrap from 'bootstrap'
import './node_modules/bootstrap/dist/css/boot.css'
// Vue.prototype.bootstrap = bootstrap;
Vue.config.productionTip = false
Vue.use(bootstrap)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
