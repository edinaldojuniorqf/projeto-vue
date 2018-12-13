import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import cliente from './modules/cliente'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cliente
  },
  state,
  mutations,
  actions
})
