import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store/index'

import { routes } from './routes/index'

Vue.use(VueRouter);
Vue.config.productionTip = false

let router = new VueRouter({
  mode: 'hash',
  routes,
  store
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
