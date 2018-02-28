// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuescroll from 'vue-scroll'
import Header from '@/components/header'

Vue.use(vuescroll,{debounce: 600})
Vue.config.productionTip = false
Vue.use("my-header",Header)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
