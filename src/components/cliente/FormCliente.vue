<template>
  <form class="FormCliente">

    <div class="row">
      <div class="col-sm-6">
        <div class="form-group" :class="{'has-error': validation.hasError('cliente.nome')}">
          <label for="nome" class="control-label">
            <sup><i class="fa fa-asterisk text-danger"></i></sup>
            Nome / Razão Social
          </label>
          <input
            id="nome"
            type="text"
            class="form-control"
            maxlength="255"
            v-model="cliente.nome" />
          <span class="help-block">{{ validation.firstError('cliente.nome') }}</span>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="form-group">
          <label for="cpf-cnpj" class="control-label">CPF / CNPJ</label>
          <input id="cpf-cnpj"
            class="form-control"
            v-mask="[masks.cpf, masks.cnpj]"
            v-model="cliente.cpfCnpj" />
        </div>
      </div>
      <div class="col-sm-3">
        <div class="form-group" :class="{'has-error': validation.hasError('cliente.email')}">
          <label for="e-mail" class="control-label">E-mail</label>
          <input
            type="email"
            class="form-control"
            maxlength="100"
            v-model="cliente.email" />
            <span class="help-block">{{ validation.firstError('cliente.email') }}</span>
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
            v-mask="masks.telefone"
            v-model="cliente.telefone" />
        </div>
      </div>
      <div class="col-sm-3">
        <div class="form-group">
          <label for="celular" class="control-label">Celular</label>
          <input
            id="celular"
            class="form-control"
            v-mask="masks.celular"
            v-model="cliente.celular" />
        </div>
      </div>
      <div class="col-sm-3">
        <div clsas="form-group">
          <label for="cep" class="control-label">CEP</label>
          <input
            id="cep"
            class="form-control"
            v-mask="masks.cep"
            v-model="cliente.cep" />
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
          <input
            id="cidade"
            type="text"
            class="form-control"
            maxlength="100"
            v-model="cliente.cidade" />
        </div>
      </div>
      <div class="col-sm-3">
        <div class="form-group">
          <label for="bairro" class="control-label">Bairro</label>
          <input
            type="bairro"
            class="form-control"
            maxlength="100"
            v-model="cliente.bairro" />
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label for="logradouro" class="control-label">Logradouro</label>
          <input
            type="logradouro"
            class="form-control"
            maxlength="200"
            v-model="cliente.logradouro" />
        </div>
      </div>
    </div>

    <div class="form-grup">
      <label for="observacao" class="control-label">Observação</label>
      <input-textarea maxlength="255" v-model="cliente.observacao" />
    </div>

    <FormAction
      @saveClick="handleSaveClick"
      @clearClick="handleClearClick" />
  </form>
</template>

<script>
import masks from '@/util/masks'
import FormAction from '@/components/FormAction'
import iziToast from 'izitoast'
import SimpleVueValidation from 'simple-vue-validator'
import clienteApi from '@/api/cliente'

const Validator = SimpleVueValidation.Validator

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

  validators: {
    'cliente.nome' (value) {
      return Validator.value(value).required('Informe o nome')
    },
    'cliente.email' (value) {
      return Validator.value(value).email('Informe um e-mail válido')
    }
  },

  created () {
    this.clear()
    this.$emit('setUfs')
  },

  methods: {
    handleSaveClick () {
      this.$validate().then(success => {
        if (success) {
          clienteApi.save(this.cliente).then(res => {
            this.$emit('saved')
            iziToast.success({
              title: 'Sucesso',
              message: 'Cadastro realizado com sucesso'
            })
          }).catch(res => {
            console.error('error', res.response)
            iziToast.error({
              title: 'Erro',
              message: 'Houve um erro ao realizar cadastro'
            })
          })
        } else {
          iziToast.error({
            title: 'Erro',
            message: this.validation.firstError()
          })
        }
      })
    },

    handleClearClick () {
      this.clear()
    },

    clear () {
      this.cliente = {
        nome: null,
        email: null
      }
    }
  }
}
</script>

<style>
</style>
