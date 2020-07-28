module.exports = {
    'env': {
        'browser': true,
        'es2020': true
    },
    'extends': [
        'airbnb-typescript',
        'prettier/react',
        'plugin:prettier/recommended',
        'plugin:import/typescript',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        "prettier/@typescript-eslint"
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 11,
        'sourceType': 'module',
        'project': './tsconfig.json'
    },
    'plugins': [
        'react',
        'react-hooks',
        '@typescript-eslint'
    ],
    'rules': {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single',
            'avoid-escape'
        ],
        'semi': [
            'error',
            'always'
        ],
        'react/prop-types': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-explicit-any': 0
    },
    'settings': {
        "react": {
            "pragma": "React",
            "version": "detect",
        },
    }
};