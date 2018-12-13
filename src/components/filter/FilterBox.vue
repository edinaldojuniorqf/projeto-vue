<template>
  <VABox class="FilterBox" :title="title" :isLoading="isLoading">
    <form slot="content">
      <slot />
      <div class="FilterBox__buttons">
        <slot name="buttons">
          <BtnFilter @click.native.prevent="handleFilter">
            Filtrar
          </BtnFilter>
          &nbsp;
          <BtnClear @click.native.prevent="handleClear">
            Limpar
          </BtnClear>
        </slot>
      </div>
    </form>
  </VABox>
</template>

<script>
import $ from 'jquery'
import VABox from 'va/widgets/VABox'
import BtnFilter from '@/components/btn/BtnFilter'
import BtnClear from '@/components/btn/BtnClear'

export default {
  name: 'FilterBox',

  components: {
    VABox,
    BtnFilter,
    BtnClear
  },

  props: {
    title: {
      type: String,
      default: 'Filtro'
    },

    isLoading: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleFilter () {
      this.$emit('clickFilter')
    },

    handleClear () {
      this.$emit('clickClear')
    }
  },

  mounted () {
    $(this.$el).boxWidget()
  }
}
</script>

<style lang="scss">
.FilterBox__buttons {
  display: flex;
  justify-content: flex-end;
}
</style>
