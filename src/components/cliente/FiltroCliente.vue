<template>
  <div>
    <form>
      <div class="row">
        <div class="col-sm-4">
          <label class="control-label" for="field-nome">Nome</label>
          <input id="field-nome" type="text" class="form-control" />
        </div>

        <div class="col-sm-4">
          <label class="control-label" for="field-cpf-cnpj">CPF/CNPJ</label>
          <input
            id="field-cpf-cnpj"
            type="text"
            class="form-control"
            v-mask="[masks.cpf, masks.cnpj]" />
        </div>
      </div>

      <div class="pull-right">
        <button class="btn btn-primary">Filtrar</button>
        &nbsp;
        <button class="btn btn-danger">Limpar</button>
      </div>
    </form>
  </div>
</template>

<script>
import masks from '@/config/masks'

export default {
  name: 'FiltroCliente',

  data () {
    return {
      masks
    }
  }
}
</script>

<style>

</style>
