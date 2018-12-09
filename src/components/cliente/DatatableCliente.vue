<template>
  <div>
    <datatable v-bind="$data" />
  </div>
</template>

<script>
const data = [
  { nome: 'ATI', cnpj: '23748223432' },
  { nome: 'AutoForce', cnpj: '234u23489234' }
]

export default {
  name: 'DatatableCliente',

  data () {
    return {
      columns: [
        { title: 'Nome', field: 'nome', sortable: true },
        { title: 'CNPJ', field: 'cnpj' }
      ],
      data,
      total: 0,
      query: {}
    }
  },

  watch: {
    query: {
      handler (query) {
      },
      deep: true
    }
  }
}
</script>

<style>

</style>
