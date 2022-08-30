import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

// Config files
import './config/bootstrap'
import store from './config/store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')