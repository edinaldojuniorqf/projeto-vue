import { connect } from 'vuex-connect'
import FiltroClienteBox from '@/components/cliente/FiltroClienteBox'

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
})(FiltroClienteBox)
