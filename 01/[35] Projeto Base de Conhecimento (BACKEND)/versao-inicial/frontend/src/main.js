import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

// Config files
import './config/bootstrap'
import './config/msg'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMP LINE | REMOVE AFTER

// require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikx1Y2kiLCJlbWFpbCI6Imx1Y2kubHVhODFAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTY2MjMzNTk4NCwiZXhwIjoxNjYyNTk1MTg0fQ.toYb3835Aoj6rlkWL2D2TjOLShW6dAhrRI8FS37_GwM'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')