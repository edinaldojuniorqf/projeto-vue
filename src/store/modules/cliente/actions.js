import axios from 'axios'

export default {
  async loadDatatable ({ state, commit }) {
    commit('SET_DATATABLE_LOADING', true)

    let { offset, limit, sort, order } = state.datatable.query

    let params = {
      _start: offset,
      _limit: limit,
      _sort: sort,
      _order: order
    }

    await axios.get('clientes', { params }).then(res => {
      commit('SET_DATATABLE_TOTAL', parseInt(res.headers['x-total-count']))
      commit('SET_DATATABLE_DATA', res.data)
    }).catch(res => {
      console.error(res)
    })

    commit('SET_DATATABLE_LOADING', false)
  }
}
