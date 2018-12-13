<template>
  <button class="btn btn-danger">
    <i class="fa fa-eraser" aria-hidden="true"></i>
    &nbsp;
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BtnClear'
}
</script>

<style>

</style>
