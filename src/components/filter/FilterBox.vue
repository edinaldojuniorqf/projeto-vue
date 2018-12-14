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
import VABox from '@/components/widgets/VABox'
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
    value: {
      type: Object,
      default () {
        return {}
      }
    },

    filter: {
      type: Object,
      default () {
        return {}
      }
    },

    title: {
      type: String,
      default: 'Filtro de Pesquisa'
    },

    isLoading: {
      type: Boolean,
      default: false
    }
  },

  created () {
    this.$emit('input', this.filter)
  },

  methods: {
    handleFilter () {
      this.$emit('setFilter', { ...this.value })
      this.$emit('setDatatableOffset', 0)
      this.$emit('loadDatatable')
      this.$emit('clickFilter')
    },

    handleClear () {
      this.$emit('setFilter', {})
      this.$emit('input', {})
      this.$emit('setDatatableOffset', 0)
      this.$emit('loadDatatable')
      this.$emit('clickClear')
    }
  }
}
</script>

<style lang="scss">
.FilterBox__buttons {
  display: flex;
  justify-content: flex-end;
}
</style>
