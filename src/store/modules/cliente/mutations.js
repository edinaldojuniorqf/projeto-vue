export default {
  'SET_FILTRO' (state, filtro) {
    state.filtro = filtro
  },

  'SET_DATATABLE_DATA' (state, data) {
    state.datatable.data = data
  },

  'SET_DATATABLE_TOTAL' (state, total) {
    state.datatable.total = total
  },

  'SET_DATATABLE_QUERY' (state, query) {
    state.datatable.query = query
  },

  'SET_DATATABLE_OFFSET' (state, offset) {
    state.datatable.query.offset = offset
  },
  'SET_DATATABLE_LOADING' (state, loading) {
    state.datatable.loading = loading
  }
}
