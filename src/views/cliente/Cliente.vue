<template>
  <div class="Cliente">
    <section class="content-header">
      <h1>Cliente</h1>
    </section>
    <section class="content">
      <FiltroClienteBox />
      <DatatableClienteBox />
    </section>
  </div>
</template>

<script>
import $ from 'jquery'
import FiltroClienteBox from '@/components/cliente/FiltroClienteBox'
import DatatableClienteBox from '@/components/cliente/DatatableClienteBox.container'

export default {
  name: 'Cliente',

  components: {
    FiltroClienteBox,
    DatatableClienteBox
  },

  mounted () {
    $(this.$el).boxWidget()
  }
}
</script>

<style>

</style>
