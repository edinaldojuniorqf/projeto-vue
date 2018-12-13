<template>
  <section class="Header content-header">
    <h1>
      <i :class="icon"></i>
      {{ title }}
    </h1>
    <slot name="actions" />
  </section>
</template>

<script>
export default {
  name: 'Header',

  props: {
    title: {
      type: String,
      default: ''
    },

    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.Header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
