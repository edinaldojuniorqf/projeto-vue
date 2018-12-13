import { connect } from 'vuex-connect'
import FormCliente from '@/components/cliente/FormCliente'

export default connect({
  stateToProps: {
    ufs: state => state.ufs
  },

  actionsToEvents: {
    setUfs: 'setUfs'
  }
})(FormCliente)
