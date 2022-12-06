module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: 'airbnb-base',
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    // dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    rules: {
        indent: ['error', 4],
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'max-len': [
            'error',
            {
                code: 110,
                ignoreUrls: true,
            },
        ],
    },
};
