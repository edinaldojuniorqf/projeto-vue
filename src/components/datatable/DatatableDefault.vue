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
  name: 'DatatableDefault',

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
    },

    columns: {
      type: Array,
      required: true
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
