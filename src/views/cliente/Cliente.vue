<template>
  <div class="Cliente">
    <section class="Cliente__header content-header">
      <h1>
        <i class="fa fa-users"></i>
        Cliente
      </h1>
      <div>
        <button class="btn btn-success" @click="handleNovoClick">
          Novo
        </button>
      </div>
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

  methods: {
    handleNovoClick () {
      this.$router.push({ name: 'ClienteCreate' })
    }
  },

  mounted () {
    $(this.$el).boxWidget()
  }
}
</script>

<style>
.Cliente__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
