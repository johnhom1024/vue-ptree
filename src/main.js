import Vue from 'vue'
import App from './App.vue'

import "@/assets/icon/iconfont.css";   // 导入图标

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
