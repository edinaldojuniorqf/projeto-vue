import clienteApi from '@/api/cliente'

export default {
  async loadDatatable ({ state, commit }) {
    commit('SET_DATATABLE_LOADING', true)

    let { offset, limit, sort, order } = state.datatable.query
    let { filtro } = state

    let params = {
      _start: offset,
      _limit: limit,
      _sort: sort,
      _order: order,
      nome_like: filtro.nome,
      cpfCnpj_like: filtro.cpfCnpj
    }

    await clienteApi.get({ params }).then(res => {
      commit('SET_DATATABLE_TOTAL', parseInt(res.headers['x-total-count']))
      commit('SET_DATATABLE_DATA', res.data)
    }).catch(res => {
      console.error(res.response)
    })

    commit('SET_DATATABLE_LOADING', false)
  }
}
