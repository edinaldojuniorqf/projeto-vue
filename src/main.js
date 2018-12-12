import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import locale from '@/config/locale/'

// components
import Datatable from 'vue2-datatable-component'
import VueTheMask from 'vue-the-mask'
import vSelect from 'vue-select'
import InputTextarea from '@/components/InputTextarea'

// imports js
import './config'
import 'va/lib/script'

// imports css
import './assets/sass/index.scss'
import 'va/lib/css'

Vue.config.productionTip = false

Vue.use(Datatable, { locale: locale['vue2-datatable-component'] })
Vue.use(VueTheMask)
Vue.component('v-select', vSelect)
Vue.component('input-textarea', InputTextarea)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
