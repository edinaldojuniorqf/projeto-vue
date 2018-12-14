import { connect } from 'vuex-connect'
import DatatableDefault from './DatatableDefault'

export default connect({
  stateToProps: {
    data: state => state.cliente.datatable.data,
    query: state => state.cliente.datatable.query,
    total: state => state.cliente.datatable.total
  },

  mutationsToEvents: {
    setDatatableQuery: 'cliente/SET_DATATABLE_QUERY'
  },

  actionsToEvents: {
    loadDatatable: 'cliente/loadDatatable'
  }
})(DatatableDefault)
