/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // 前置：
    //  1. 禁用格式化插件 prettier，format on save要关闭
    //  2. 安装 Eslint 插件，并配置保存时自动修复
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true, // 字符串两边为单引号
        semi: false, // 无分号
        printWidth: 80, // 每行宽度最多为 80 列，多于80列会自动扩列
        trailingComma: 'none', // 对象，数组的参数最后不加逗号
        endOfLine: 'auto' // 换行符号不限制
      }
    ],
    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: ['index'] // vue 组件的名称必须由多个单词组成（忽略 index.vue）
      }
    ],
    'vue/no-setup-props-destructure': ['off'], // 忽略 props 解构报错
    'no-undef': 'error' // 未定义变量要报错
  }
}
