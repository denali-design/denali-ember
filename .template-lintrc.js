'use strict';

module.exports = {
  extends: 'stylistic',
  overrides: [
    {
      // Better compatibility with Storybook stories
      files: ['stories/**/*.stories.js'],
      rules: {
        'no-multiple-empty-lines': false,
      },
    },
  ],
};
