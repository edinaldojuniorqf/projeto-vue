<template>
  <div class="ClienteCreate">
    <section class="ClienteCreate__header content-header">
      <h1>
        <i class="fa fa-users"></i>
        Cliente
      </h1>
      <div>
        <button class="btn btn-default" @click="handleVoltarClick">
          Voltar
        </button>
      </div>
    </section>
    <section class="content">
      <FormClienteBox />
    </section>
  </div>
</template>

<script>
import FormClienteBox from '@/components/cliente/FormClienteBox'

export default {
  name: 'ClienteCreate',

  components: {
    FormClienteBox
  },

  methods: {
    handleVoltarClick () {
      this.$router.push({ name: 'Cliente' })
    }
  }
}
</script>

<style>
.ClienteCreate__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
