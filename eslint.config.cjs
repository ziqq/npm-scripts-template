module.exports = {
    // root: true,
    languageOptions: {
        parserOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
        },
    },
    // env: {
    //     es6: true,
    // },
    // extends: [
    //     'plugin:prettier/recommended',
    //     'plugin:unicorn/recommended',
    //     'plugin:node/recommended-script',
    //     'plugin:jest/recommended',
    // ],
    // plugins: ['standard'],
    // rules: {
    //     // Allow some flexibility here
    //     'unicorn/prevent-abbreviations': 'off',

    //     // Use camelCase for files (and directories - not enforced)
    //     'unicorn/filename-case': ['error', { case: 'camelCase' }],

    //     // Turn off explicit length checks
    //     'unicorn/explicit-length-check': 'off',

    //     // Turning off because it leads to many uses of the word 'error' in the same block, which is confusing
    //     // E.g.
    //     // } catch(error) {
    //     //   logger.error(error);
    //     //   return error(error);
    //     // }
    //     'unicorn/catch-error-name': 'off',

    //     // This rule is no good for test specs. Need to find a way to disable this for test specs
    //     'unicorn/consistent-function-scoping': 'off',

    //     'node/no-unsupported-features/es-syntax': [
    //         'error',
    //         { ignores: ['dynamicImport', 'modules'] },
    //     ],

    //     'unicorn/prefer-node-protocol': 'off', // Turn this off for Jest
    // },
};
