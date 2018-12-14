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
        { title: 'Nome', field: 'nome', sortable: true },
        { title: 'CPF/CNPJ', field: 'cpfCnpj' }
      ]
    }
  }
}
</script>

<style>

</style>
