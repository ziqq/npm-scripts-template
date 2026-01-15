/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'block-no-empty': true,

    // valid values: "short" | "long", https://stylelint.io/user-guide/rules/color-hex-length/
    'color-hex-length': 'long',

    // чтобы не требовать пустые строки перед КАЖДОЙ декларацией, https://stylelint.io/user-guide/rules/declaration-empty-line-before
    'declaration-empty-line-before': 'never',

    // и для CSS variables то же самое (и без несуществующего first-line), https://stylelint.io/user-guide/rules/custom-property-empty-line-before
    'custom-property-empty-line-before': null,

    // если хочешь оставить vendor prefix точечно, https://stylelint.io/user-guide/rules/property-no-vendor-prefix
    'property-no-vendor-prefix': [
      true,
      { ignoreProperties: ['background-clip'] },
    ],

    'font-family-name-quotes': 'always-where-recommended', // https://stylelint.io/user-guide/rules/font-family-name-quotes

    // разрешаем BEM с двойным дефисом
    'selector-class-pattern': [
      '^[a-z0-9]+(?:-[a-z0-9]+)*(?:--[a-z0-9]+(?:-[a-z0-9]+)*)?$',
      { message: 'Expected kebab-case or BEM (--modifier)' },
    ],

    'color-function-notation': 'legacy',
    'color-function-alias-notation': 'with-alpha',
    'alpha-value-notation': 'number',
  },
};
