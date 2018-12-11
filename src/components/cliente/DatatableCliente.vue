<template>
  <div>
    <datatable
      :data="data"
      :total="total"
      :query="query"
      :columns="columns" />
  </div>
</template>

<script>
export default {
  name: 'DatatableCliente',

  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },

    total: {
      type: Number,
      default: 0
    },

    query: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  data () {
    return {
      columns: [
        { title: 'Nome', field: 'nome', sortable: true },
        { title: 'CNPJ', field: 'cnpj' }
      ]
    }
  },

  watch: {
    query: {
      handler (query) {
        this.$emit('setDatatableQuery', query)
        this.$emit('loadDatatable')
      },
      deep: true
    }
  }
}
</script>

<style>

</style>
