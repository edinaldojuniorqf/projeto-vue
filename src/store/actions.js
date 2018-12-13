import axios from 'axios'

export default {
  setUfs ({ state, commit }) {
    if (state.ufs.length === 0) {
      axios.get('ufs').then(res => {
        commit('SET_UFS', res.data)
      })
    }
  }
}
