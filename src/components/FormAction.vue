<template>
  <div class="FormAction">
    <span>
      <i class="fa fa-asterisk text-danger"></i> campos obrigatórios
    </span>
    <div>
      <slot name="buttons">
        <BtnSave @click.native.prevent="handleSaveClick">Salvar</BtnSave>
        &nbsp;
        <BtnClear @click.native.prevent="handleClearClick">Limpar</BtnClear>
      </slot>
    </div>
  </div>
</template>

<script>
import BtnSave from '@/components/btn/BtnSave'
import BtnClear from '@/components/btn/BtnClear'

export default {
  name: 'FormAction',

  components: {
    BtnSave,
    BtnClear
  },

  methods: {
    handleSaveClick () {
      this.$emit('saveClick')
    },

    handleClearClick () {
      this.$emit('clearClick')
    }
  }
}
</script>

<style lang="scss">
.FormAction {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
}
</style>
