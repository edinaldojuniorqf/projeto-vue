<template>
  <VABox title="Lista de Clientes" :isLoading="loading" icon="fa fa-file-text">
    <DatatableCliente
      :columns="columns"
      slot="content" />
  </VABox>
</template>

<script>
import VABox from '@/components//widgets/VABox'
import DatatableCliente from '@/components/datatable/DatatableCliente.container'
import tdTelefoneCelular from './comps/td-TelefoneCelular'

export default {
  name: 'DatatableClienteBox',

  components: {
    VABox,
    DatatableCliente
  },

  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      columns: [
        { title: 'Cod', field: 'id', sortable: true },
        { title: 'Nome', field: 'nome', sortable: true },
        { title: 'CPF / CNPJ', field: 'cpfCnpj' },
        { title: 'E-mail', field: 'email' },
        { title: 'Telefone / Celular', field: 'id', tdComp: tdTelefoneCelular }
      ]
    }
  }
}
</script>

<style>

</style>
