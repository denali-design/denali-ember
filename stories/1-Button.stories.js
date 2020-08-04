import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { STYLES, SIZES, TYPES } from '../addon/components/denali-button-enums';

export default {
  title: 'DenaliButton',
  component: 'DenaliButton',
  decorators: [withKnobs],
};

export const Solid = () => ({
  template: hbs`
    <DenaliButton
      @isActive={{active}}
      @isInverse={{inverse}}
      @size={{size}}
      @style={{style}}
      @type={{type}}
      disabled={{disabled}}
      onClick={{onClick}}
    >
      {{text}}
    </DenaliButton>
  `,
  context: {
    active: boolean('Active', false),
    disabled: boolean('Disabled', false),
    inverse: boolean('Inverse', false),
    onClick: action('clicked'),
    size: select('Size', SIZES),
    style: select('Style', STYLES),
    text: text('Button Text', 'Button'),
    type: select('Type', TYPES),
  },
});
