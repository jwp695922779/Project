import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/testModule'
// import scroll from '@/components/scroll'
import Main from '@/components/main'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router);
Vue.use(ElementUI);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    }
  ]
})
