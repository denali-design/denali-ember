import './style.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: { page: null },
  html: {
    prettier: {
      tabWidth: 4,
      useTabs: false,
      htmlWhitespaceSensitivity: 'strict',
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [],
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
    },
  },
};
