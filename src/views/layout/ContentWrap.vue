<template>
  <div class="content-wrapper">
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ContentWrap'
}
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
