<template>
  <div>
    <textarea class="form-control"
      :rows="rows"
      :maxlength="maxlength"
      @input="handleInput"
      :value="value"></textarea>
    <small class="help-block text-right" v-if="maxlength">
      Máximo de caracteres: {{ length }}
    </small>
  </div>
</template>

<script>
export default {
  name: 'InputTextarea',

  props: {
    value: {
      type: String,
      default: ''
    },
    rows: {
      type: String,
      default: '3'
    },
    maxlength: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      length: this.maxlength
    }
  },

  watch: {
    value (value) {
      this.setLength(value)
    }
  },

  methods: {
    setLength (value = '') {
      if (this.maxlength) {
        this.length = this.maxlength - value.length
      }
    },

    handleInput (e) {
      let { value } = e.target
      this.setLength(value)
      this.$emit('input', value)
    }
  }
}
</script>
