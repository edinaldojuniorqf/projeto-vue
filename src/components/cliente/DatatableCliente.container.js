import { connect } from 'vuex-connect'
import DatatableCliente from './DatatableCliente'

export default connect({
  stateToProps: {
    data: state => state.cliente.datatable.data,
    query: state => state.cliente.datatable.query,
    total: state => state.cliente.datatable.total,
    loading: state => state.cliente.datatable.loading
  },

  mutationsToEvents: {
    setDatatableQuery: 'cliente/SET_DATATABLE_QUERY'
  },

  actionsToEvents: {
    loadDatatable: 'cliente/loadDatatable'
  }
})(DatatableCliente)
