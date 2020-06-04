import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'DenaliButton',
};

export const Solid = () => ({
  template: hbs`
    <DenaliButton>Default</DenaliButton>
    <DenaliButton @isActive={{true}}>Active</DenaliButton>
    <DenaliButton disabled={{true}}>Disabled</DenaliButton>
  `,
  context: {
    onClick: action('clicked'),
  },
});
