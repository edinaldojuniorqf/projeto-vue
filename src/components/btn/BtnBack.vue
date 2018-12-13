<template>
  <button class="btn btn-danger">
    <i class="fa fa-undo" aria-hidden="true"></i>
    &nbsp;
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BtnBack'
}
</script>

<style>

</style>
