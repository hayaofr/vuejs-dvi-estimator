import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import store from './store/index'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/style.css'
import './assets/css/form.css'
import './assets/css/loading-bars.css'
import './assets/css/riliwan-rabo.css'


import { routes } from './routes/index'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
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
