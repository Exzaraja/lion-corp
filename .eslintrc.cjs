module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/max-attributes-per-line': 1,
    'vue/singleline-html-element-content-newline': 1
  }
}
