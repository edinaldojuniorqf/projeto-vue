<template>
  <div class="ClienteCreate">
    <Header
      title="Cliente"
      icon="fa fa-users">
      <div slot="actions">
        <BtnBack @click.native="handleVoltarClick">Voltar</BtnBack>
      </div>
    </header>
    <section class="content">
      <FormClienteBox @saved="handleSaved" />
    </section>
  </div>
</template>

<script>
import FormClienteBox from '@/components/cliente/FormClienteBox'
import Header from '@/components/Header'
import BtnBack from '@/components/btn/BtnBack'

export default {
  name: 'ClienteCreate',

  components: {
    FormClienteBox,
    Header,
    BtnBack
  },

  methods: {
    handleVoltarClick () {
      this.$router.push({ name: 'Cliente' })
    },

    handleSaved () {
      this.$emit('setDatatableOffset', 0)
      this.$emit('loadDatatable')
      this.$router.push({ name: 'Cliente' })
    }
  }
}
</script>

<style>
</style>
