import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Datatable from 'vue2-datatable-component'
import VueTheMask from 'vue-the-mask'
import locale from '@/config/locale/'

// imports js
import './config'
import 'va/lib/script'

// imports css
import 'va/lib/css'

Vue.config.productionTip = false

Vue.use(Datatable, { locale: locale['vue2-datatable-component'] })
Vue.use(VueTheMask)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
