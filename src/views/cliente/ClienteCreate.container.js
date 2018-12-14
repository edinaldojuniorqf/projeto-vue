import { connect } from 'vuex-connect'
import ClienteCreate from '@/views/cliente/ClienteCreate'

export default connect({
  mutationsToEvents: {
    setDatatableOffset: 'cliente/SET_DATATABLE_OFFSET'
  },

  actionsToEvents: {
    loadDatatable: 'cliente/loadDatatable'
  }
})(ClienteCreate)
