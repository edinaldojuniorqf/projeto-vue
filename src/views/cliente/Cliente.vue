<template>
  <div class="Cliente">
    <section class="content-header">
      <h1>Cliente</h1>
    </section>
    <section class="content">
      <DatatableClienteBox />
    </section>
  </div>
</template>

<script>
import DatatableClienteBox from '@/components/cliente/DatatableClienteBox'

export default {
  name: 'Cliente',

  components: {
    DatatableClienteBox
  }
}
</script>

<style>

</style>
