<template>
  <VABox title="Filtro">
    <FiltroCliente slot="content" />
  </VABox>
</template>

<script>
import $ from 'jquery'
import VABox from 'va/widgets/VABox'
import FiltroCliente from '@/components/cliente/FiltroCliente.container'

export default {
  name: 'FiltroClienteBox',

  components: {
    VABox,
    FiltroCliente
  },

  mounted () {
    $(this.$el).boxWidget()
  }
}
</script>

<style>

</style>
