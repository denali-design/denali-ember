import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { STYLES, SIZES, TYPES } from '../addon/components/denali-button-enums';
import { attribute, argument, content } from './knob-categories';

export default {
  title: 'DenaliButton',
  component: 'DenaliButton',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliButton>{{content}}</DenaliButton>
  `,
  context: {
    content: 'Denali Button',
  },
});

export const Playground = () => ({
  template: hbs`
    <DenaliButton
      @isActive={{isActive}}
      @isInverse={{isInverse}}
      @size={{size}}
      @style={{style}}
      @type={{type}}
      disabled={{disabled}}
      class={{class}}
      {{on 'click' onClick}}
    >
      {{content}}
    </DenaliButton>
  `,
  context: {
    isActive: boolean('isActive', false, argument),
    isInverse: boolean('isInverse', false, argument),
    onClick: action('onClick'),
    size: select('size', SIZES, SIZES[0], argument),
    style: select('style', STYLES, STYLES[0], argument),
    type: select('type', TYPES, TYPES[0], argument),
    class: text('class', '', attribute),
    disabled: boolean('disabled', false, attribute),
    content: text('content', 'Denali Button', content),
  },
});
