<template>
  <div class="Cliente">
    <Header
      title="Cliente"
      icon="fa fa-users">
      <div slot="actions">
        <BtnNew @click.native="handleNewClick">Novo</BtnNew>
      </div>
    </header>

    <section class="content">
      <FilterBoxCliente />
      <DatatableClienteBox />
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header'
import BtnNew from '@/components/btn/BtnNew'
import FilterBoxCliente from '@/components/cliente/FilterBoxCliente'
import DatatableClienteBox from '@/components/cliente/DatatableClienteBox.container'

export default {
  name: 'Cliente',

  components: {
    Header,
    BtnNew,
    FilterBoxCliente,
    DatatableClienteBox
  },

  methods: {
    handleNewClick () {
      this.$router.push({ name: 'ClienteCreate' })
    }
  }
}
</script>

<style>

</style>
