<template>
  <div>
    {{ telefoneCelular }}
  </div>
</template>

<script>
export default {
  name: 'td-TelefoneCelular',

  props: ['row'],

  computed: {
    telefoneCelular () {
      let value = []
      let { telefone, celular } = this.row

      if (telefone) {
        value.push(telefone)
      }

      if (celular) {
        value.push(celular)
      }

      return value.join(' / ')
    }
  }
}
</script>

<style>

</style>
