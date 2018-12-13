<template>
  <div>
    <form>
      <div class="row">
        <div class="col-sm-4">
          <label class="control-label" for="field-nome">Nome</label>
          <input
            id="field-nome"
            type="text"
            class="form-control"
            v-model="filtrar.nome" />
        </div>

        <div class="col-sm-4">
          <label class="control-label" for="field-cpf-cnpj">CPF/CNPJ</label>
          <input
            id="field-cpf-cnpj"
            type="text"
            class="form-control"
            v-mask="[masks.cpf, masks.cnpj]"
            v-model="filtrar.cpfCnpj" />
        </div>
      </div>

      <div class="pull-right">
        <BtnFilter @click.native.prevent="handleFiltrar">
          Filtrar
        </BtnFilter>

        &nbsp;

        <BtnClear @click.native.prevent="handleLimpar">
          Limpar
        </BtnClear>
      </div>
    </form>
  </div>
</template>

<script>
import BtnFilter from '@/components/btn/BtnFilter'
import BtnClear from '@/components/btn/BtnClear'
import masks from '@/util/masks'

export default {
  name: 'FiltroCliente',

  components: {
    BtnFilter,
    BtnClear
  },

  props: {
    filtro: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  data () {
    return {
      masks,
      filtrar: {}
    }
  },

  created () {
    this.filtrar = { ...this.filtro }
  },

  methods: {
    handleFiltrar () {
      this.handleSubmit()
    },

    handleLimpar () {
      this.reset()
      this.handleSubmit()
    },

    handleSubmit () {
      this.$emit('setFiltro', { ...this.filtrar })
      this.$emit('setDatatableOffset', 0)
      this.$emit('loadDatatable')
    },

    reset () {
      this.filtrar = {
        nome: '',
        cpfCnpj: ''
      }
    }
  }
}
</script>

<style>

</style>
