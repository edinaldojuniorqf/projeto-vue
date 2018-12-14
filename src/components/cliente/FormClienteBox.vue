<template>
  <VABox title="Cadastro de Cliente">
    <FormCliente slot="content" />
  </VABox>
</template>

<script>
import VABox from '@/components/widgets/VABox'
import FormCliente from '@/components/cliente/FormCliente.container'

export default {
  name: 'FormClienteBox',

  components: {
    VABox,
    FormCliente
  }
}
</script>

<style>

</style>
