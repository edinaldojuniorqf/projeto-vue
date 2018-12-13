<template>
  <form class="FormCliente">

    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <label for="nome" class="control-label">Nome / Razão Social</label>
          <input id="nome" type="text" class="form-control" maxlength="255" />
        </div>
      </div>
      <div class="col-sm-3">
        <div class="form-group">
          <label for="cpf-cnpj" class="control-label">CPF / CNPJ</label>
          <input id="cpf-cnpj"
            class="form-control"
            v-mask="[masks.cpf, masks.cnpj]" />
        </div>
      </div>
      <div class="col-sm-3">
        <div class="form-group">
          <label for="e-mail" class="control-label">E-mail</label>
          <input type="email" class="form-control" maxlength="100" />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-3">
        <div class="form-group">
          <label for="telefone" class="control-label">Telefone</label>
          <input
            id="telefone"
            class="form-control"
            v-mask="masks.telefone" />
        </div>
      </div>
      <div class="col-sm-3">
        <div class="form-group">
          <label for="celular" class="control-label">Celular</label>
          <input
            id="celular"
            class="form-control"
            v-mask="masks.celular" />
        </div>
      </div>
      <div class="col-sm-3">
        <div clsas="form-group">
          <label for="cep" class="control-label">CEP</label>
          <input
            id="cep"
            class="form-control"
            v-mask="masks.cep" />
        </div>
      </div>
      <div class="col-sm-3">
        <div class="form-group">
          <label for="uf" class="control-label">UF</label>
          <v-select
            inputId="uf"
            label="sigla"
            :options="ufs"
            v-model="cliente.uf" />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-3">
        <div class="form-group">
          <label for="cidade" class="control-label">Cidade</label>
          <input id="cidade" type="text" class="form-control" maxlength="100" />
        </div>
      </div>
      <div class="col-sm-3">
        <div class="form-group">
          <label for="bairro" class="control-label">Bairro</label>
          <input type="bairro" class="form-control" maxlength="100" />
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label for="logradouro" class="control-label">Logradouro</label>
          <input type="logradouro" class="form-control" maxlength="200" />
        </div>
      </div>
    </div>

    <div class="form-grup">
      <label for="observacao" class="control-label">Observação</label>
      <input-textarea maxlength="255" />
    </div>

    <FormAction
      @saveClick="handleSaveClick"
      @clearClick="handleClearClick" />
  </form>
</template>

<script>
import masks from '@/util/masks'
import FormAction from '@/components/FormAction'

export default {
  name: 'FormCliente',

  components: {
    FormAction
  },

  props: {
    ufs: {
      type: Array,
      default () {
        return []
      }
    }
  },

  data () {
    return {
      masks,
      cliente: {}
    }
  },

  methods: {
    handleSaveClick () {
    },

    handleClearClick () {
    }
  }
}
</script>

<style>
</style>
