<template>
  <VABox title="Lista de Clientes" :isLoding="false">
    <DatatableCliente slot="content" />
  </VABox>
</template>

<script>
import $ from 'jquery'
import VABox from 'va/widgets/VABox'
import DatatableCliente from '@/components/cliente/DatatableCliente'

export default {
  name: 'DatatableClienteBox',

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
