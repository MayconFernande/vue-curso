module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/airbnb',
    'plugin:vuejs-accessibility/recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  rules: {
    // Permite arquivos .vue usarem importações com caminhos relativos simples
    'import/no-unresolved': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        vue: 'never',
      },
    ],

    // Permite que componentes emitam eventos personalizados sem erro
    'vue/require-explicit-emits': 'off',

    // Permite usar `v-html` quando necessário, com cautela
    'vue/no-v-html': 'off',
    "no-param-reassign": "off",

    // Acessibilidade - relaxar algumas regras
    'vuejs-accessibility/click-events-have-key-events': 'warn',
    'vuejs-accessibility/label-has-for': 'off',

    // Estilo opcional
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'max-len': ['error', {
          code: 120,
          ignoreComments: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreUrls: true,
        }],
      },
    },
  ],
};
