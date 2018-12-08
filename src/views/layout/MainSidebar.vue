<template>
  <aside class="main-sidebar">
    <section class="sidebar">
      <!--
      <div class="user-panel">
        <div class="pull-left info">
        </div>
      </div>
      -->
      <ul data-widget="tree" class="sidebar-menu">
        <VASlideItem
          v-for="(item,index) in slideMenuItems"
          :data="item"
          :key="index"
          :type="item.type"
          :isHeader="item.isHeader"
          :icon="item.icon"
          :name="item.name"
          :badge="item.badge"
          :items="item.items"
          :router="item.router"
          :link="item.link"
        >
        </VASlideItem>
      </ul>
    </section>
  </aside>
</template>

<script>
import slideMenuItems from '@/util/slideMenuItems'
import VASlideItem from 'va/components/VASlideItem'

export default {
  name: 'MainSidebar',

  components: {
    VASlideItem
  },

  data () {
    return {
      slideMenuItems
    }
  }
}
</script>

<style>

</style>
