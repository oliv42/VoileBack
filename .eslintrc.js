module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: airbnb - base,
    overrides: [],
    parserOptions: {
        ecmaVersion: latest,
    },
    rules: {
        indent: [error, 4],
        "max-len": [error, {
                code: 110,
                template: 80,
                comments: 80,
                ignorePattern: false,
                ignoreComments: false,
                ignoreTrailingComments: false,
                ignoreUrls: true,
                ignoreStrings: false,
                ignoreTemplateLiterals: false,
                ignoreRegExpLiterals: false,
                ignoreHTMLAttributeValues: false,
                ignoreHTMLTextContents: false,
                tabWidth: 2,
            },
        ],
    },
};
