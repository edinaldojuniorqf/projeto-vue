import { connect } from 'vuex-connect'
import DatatableClienteBox from './DatatableClienteBox'

export default connect({
  stateToProps: {
    loading: state => state.cliente.datatable.loading
  }
})(DatatableClienteBox)
