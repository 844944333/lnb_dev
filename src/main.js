import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

/* 引入初始化 css */
import 'reset-css'
/* 引入 iconfont */
import '@/assets/iconfont/iconfont.css'
/* 引入 vant */
import '@/vantui'
/* 引入 animate */
import 'animate.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
