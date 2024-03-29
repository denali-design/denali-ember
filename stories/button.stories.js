import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { STYLES, SIZES, TYPES } from '../addon/components/denali-button-enums';
import { rootName, attribute, argument, content } from './knob-categories';

export default {
  title: `${rootName}/DenaliButton`,
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
      @isFull={{isFull}}
      @style={{style}}
      @icon={{icon}}
      @iconOnly={{iconOnly}}
      @type={{type}}
      disabled={{disabled}}
      @isLoading={{isLoading}}
      class={{class}}
      {{on "click" onClick}}
    >
      {{content}}
    </DenaliButton>
  `,
  context: {
    isActive: boolean('isActive', false, argument),
    isInverse: boolean('isInverse', false, argument),
    onClick: action('onClick'),
    size: select('size', SIZES, SIZES[0], argument),
    isFull: boolean('isFull', false, argument),
    isLoading: boolean('isLoading', false, argument),
    style: select('style', STYLES, STYLES[0], argument),
    icon: text('icon', '', argument),
    iconOnly: boolean('iconOnly', false, argument),
    type: select('type', TYPES, TYPES[0], argument),
    class: text('class', '', attribute),
    disabled: boolean('disabled', false, attribute),
    content: text('content', 'Denali Button', content),
  },
});
