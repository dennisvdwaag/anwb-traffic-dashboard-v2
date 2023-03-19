module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: [
        'react',
    ],
    rules: {
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
        'react/jsx-props-no-spreading': [0],
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
        'react/require-default-props': [0],
        'import/extensions': [0],
        'import/prefer-default-export': [0],
        'max-len': ['error', { code: 200 }],
        'arrow-body-style': ['error', 'as-needed'],
        'prefer-arrow-callback': ['error'],
        'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
        '@typescript-eslint/semi': ['off'],
        semi: ['error', 'always'],
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
        }],
        '@typescript-eslint/comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
        }],
        '@typescript-eslint/strict-boolean-expressions': 'off',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
            },
        },
    },
};
