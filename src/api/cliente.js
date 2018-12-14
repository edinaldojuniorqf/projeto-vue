import axios from 'axios'

export default {
  get (config) {
    return axios.get('clientes', config)
  },

  save (cliente) {
    if (cliente.id) {
      return axios.put('clientes', cliente)
    } else {
      return axios.post('clientes', cliente)
    }
  }
}
