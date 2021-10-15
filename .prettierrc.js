'use strict';

module.exports = {
  singleQuote: true,
  printWidth: 120,
  overrides: [
    {
      files: '*.hbs',
      options: {
        singleQuote: false,
      },
    },
  ],
};
