module.exports = {
  configureWebpack: {
      resolve: {
          alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'va': 'vue2-admin-lte/src'
          }
      }
  }
}
