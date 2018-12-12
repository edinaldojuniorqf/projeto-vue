<template>
  <VABox title="Cadastro de Cliente">
    <FormCliente slot="content" />
  </VABox>
</template>

<script>
import $ from 'jquery'
import VABox from 'va/widgets/VABox'
import FormCliente from '@/components/cliente/FormCliente'

export default {
  name: 'FormClienteBox',

  components: {
    VABox,
    FormCliente
  },

  mounted () {
    $(this.$el).boxWidget()
  }
}
</script>

<style>

</style>
