import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Datatable from 'vue2-datatable-component'

import locale from '@/config/locale/'

import 'va/lib/css'

import 'va/lib/script'

Vue.config.productionTip = false

Vue.use(Datatable, { locale: locale['vue2-datatable-component'] })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
