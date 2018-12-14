<template>
  <VABox title="Cadastro de Cliente">
    <FormCliente
    slot="content"
    @saved="hanldeSaved" />
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
  },

  methods: {
    hanldeSaved () {
      this.$emit('saved')
    }
  }
}
</script>

<style>

</style>
