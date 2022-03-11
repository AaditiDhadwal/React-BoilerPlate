module.exports = {
    root: true,
    extends: ['airbnb', 'airbnb/hooks', 'prettier'],
    plugins: ['jest'],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/jsx-props-no-spreading': 'off',
        'no-nested-ternary': 'off',
        'no-restricted-syntax': 'off',
        'jsx-a11y/label-has-for': [
            1,
            {
                required: {
                    every: ['id'],
                },
            },
        ],
        'jsx-a11y/label-has-associated-control': [
            2,
            {
                labelComponents: ['CustomInputLabel'],
                labelAttributes: ['label'],
                controlComponents: ['CustomInput'],
                depth: 3,
            },
        ],
        'react/react-in-jsx-scope': 'off',
        'no-prototype-builtins': 'off',
        'react/function-component-definition': [
            2,
            { namedComponents: 'function-declaration' },
        ],
    },
    env: {
        browser: true,
        node: true,
        'jest/globals': true,
    },
    parserOptions: {
        ecmaVersion: 2020,
    },
}
