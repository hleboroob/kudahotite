import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'materialize-css/dist/js/materialize.min'
import Paginate from 'vuejs-paginate'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000'

Vue.config.productionTip = false


Vue.component('Paginate', Paginate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
