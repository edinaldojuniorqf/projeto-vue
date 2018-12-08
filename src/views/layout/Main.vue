<template>
  <div class="wrapper">
    <MainHeader />
    <MainSidebar />
    <ContentWrap />
    <MainFooter />
  </div>
</template>

<script>
import $ from 'jquery'
import MainHeader from '@/views/layout/MainHeader'
import MainSidebar from '@/views/layout/MainSidebar'
import ContentWrap from '@/views/layout/ContentWrap'
import MainFooter from '@/views/layout/MainFooter'

export default {
  name: 'Main',

  components: {
    MainHeader,
    MainSidebar,
    ContentWrap,
    MainFooter
  },

  mounted () {
    $(this.$el).layout()
  }
}
</script>

<style lang="scss">
</style>
