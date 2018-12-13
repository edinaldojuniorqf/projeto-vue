import { connect } from 'vuex-connect'
import FilterBox from '@/components/filter/FilterBox'

export default connect({
  stateToProps: {
    filter: state => state.cliente.filtro
  },

  mutationsToEvents: {
    setFilter: 'cliente/SET_FILTRO',
    setDatatableOffset: 'cliente/SET_DATATABLE_OFFSET'
  },

  actionsToEvents: {
    loadDatatable: 'cliente/loadDatatable'
  }
})(FilterBox)
