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
      <FiltroClienteBox />
      <DatatableClienteBox />
    </section>
  </div>
</template>

<script>
import $ from 'jquery'
import Header from '@/components/Header'
import BtnNew from '@/components/btn/BtnNew'
import FiltroClienteBox from '@/components/cliente/FiltroClienteBox'
import DatatableClienteBox from '@/components/cliente/DatatableClienteBox.container'

export default {
  name: 'Cliente',

  components: {
    Header,
    BtnNew,
    FiltroClienteBox,
    DatatableClienteBox
  },

  methods: {
    handleNewClick () {
      this.$router.push({ name: 'ClienteCreate' })
    }
  },

  mounted () {
    $(this.$el).boxWidget()
  }
}
</script>

<style>

</style>
