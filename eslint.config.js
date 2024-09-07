import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  formatters: true,
  rules: {
    'no-console': 'off',
  },
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },
})
