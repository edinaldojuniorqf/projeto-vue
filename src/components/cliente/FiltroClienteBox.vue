<template>
  <VABox title="Filtro">
    <FiltroCliente slot="content" />
  </VABox>
</template>

<script>
import VABox from 'va/widgets/VABox'
import FiltroCliente from '@/components/cliente/FiltroCliente.container'

export default {
  name: 'FiltroClienteBox',

  components: {
    VABox,
    FiltroCliente
  }
}
</script>

<style>

</style>
