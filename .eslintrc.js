module.exports = {
    env: {
        browser: true,
        es2020: true,
        jest: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'airbnb',
        'airbnb/hooks',

    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        quotes: [2, 'single', { avoidEscape: true }],
        'jsx-quotes': [2, 'prefer-single'],
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/forbid-prop-types': 0,
        'jsx-a11y/label-has-associated-control': 'off',
        'max-len': ["error", { "code": 150 }],
    },
};