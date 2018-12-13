<template>
  <FilterBox v-model="filter">
    <div class="row">
      <div class="col-sm-4">
        <label class="control-label" for="field-nome">Nome</label>
        <input
          id="field-nome"
          type="text"
          class="form-control"
          v-model="filter.nome" />
      </div>

      <div class="col-sm-4">
        <label class="control-label" for="field-cpf-cnpj">CPF/CNPJ</label>
        <input
          id="field-cpf-cnpj"
          type="text"
          class="form-control"
          v-mask="[masks.cpf, masks.cnpj]"
          v-model="filter.cpfCnpj" />
      </div>
    </div>
  </FilterBox>
</template>

<script>
import FilterBox from '@/components/filter/FilterBoxCliente.container'
import masks from '@/util/masks'

export default {
  name: 'FiltroClienteBox',

  components: {
    FilterBox
  },

  data () {
    return {
      masks,
      filter: {}
    }
  }
}
</script>

<style>

</style>
