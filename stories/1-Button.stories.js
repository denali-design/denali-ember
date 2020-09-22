import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { STYLES, SIZES, TYPES } from '../addon/components/denali-button-enums';

export default {
  title: 'DenaliButton',
  component: 'DenaliButton',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliButton>{{children}}</DenaliButton>
  `,
  context: {
    children: text('children', 'Button'),
  },
});

export const Playground = () => ({
  template: hbs`
    <DenaliButton
      @isActive={{isActive}}
      @isInverse={{inverse}}
      @size={{size}}
      @style={{style}}
      @type={{type}}
      disabled={{disabled}}
      onClick={{onClick}}
    >
      {{children}}
    </DenaliButton>
  `,
  context: {
    children: text('children', 'Button'),
    isActive: boolean('isActive', false),
    disabled: boolean('disabled', false),
    isInverse: boolean('isInverse', false),
    onClick: action('clicked'),
    size: select('size', SIZES),
    style: select('style', STYLES),
    type: select('type', TYPES),
  },
});
