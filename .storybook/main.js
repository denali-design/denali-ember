module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        controls: false,
      },
    },
  ],
};
