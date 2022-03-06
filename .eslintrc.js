module.exports = {
    env: {
        browser: true,
        es2021: true,
        'vue/setup-compiler-macros': true,
    },
    extends: ['plugin:vue/vue3-recommended', 'airbnb-base', 'prettier'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['vue', 'prettier'],
    rules: {
        'vue/script-setup-uses-vars': 'error',
        'vue/valid-template-root': 'off',
        'vue/no-unused-vars': 'off',
        'vue/require-default-prop': 'off',
        'no-console': 'off',
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'import/no-unresolved': 0,
    },
}
