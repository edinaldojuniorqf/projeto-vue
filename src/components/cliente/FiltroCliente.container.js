import { connect } from 'vuex-connect'
import FiltroCliente from '@/components/cliente/FiltroCliente'

export default connect({
  stateToProps: {
    filtro: state => state.cliente.filtro
  },

  mutationsToEvents: {
    setFiltro: 'cliente/SET_FILTRO',
    setDatatableOffset: 'cliente/SET_DATATABLE_OFFSET'
  },

  actionsToEvents: {
    loadDatatable: 'cliente/loadDatatable'
  }
})(FiltroCliente)
