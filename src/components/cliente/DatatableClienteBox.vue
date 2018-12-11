<template>
  <VABox title="Lista de Clientes" :isLoading="loading">
    <DatatableCliente slot="content" />
  </VABox>
</template>

<script>
import $ from 'jquery'
import VABox from 'va/widgets/VABox'
import DatatableCliente from '@/components/cliente/DatatableCliente.container'

export default {
  name: 'DatatableClienteBox',

  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },

  components: {
    VABox,
    DatatableCliente
  },

  mounted () {
    $('.box', this.$el).boxWidget()
  }
}
</script>

<style>

</style>
