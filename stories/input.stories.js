import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { argument, attribute } from './knob-categories';
import { action } from '@storybook/addon-actions';
import { SIZES, STATES } from '../addon/components/denali-input-enums';

export default {
  title: 'DenaliInput',
  component: 'DenaliInput',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliInput type="text" placeholder="Denali Input" />
  `,
});

export const Playground = () => ({
  template: hbs`
    <DenaliInput 
      @size={{size}}
      @state={{state}}
      @isInverse={{isInverse}}
      @iconFront={{iconFront}}
      @iconBack={{iconBack}}
      @iconFrontClass={{iconFrontClass}}
      @iconBackClass={{iconBackClass}}
      @errorMsg={{errorMsg}}
      @wrapperClass={{wrapperClass}}
      value={{value}}
      placeholder={{placeholder}}
      disabled={{disabled}}
      type={{type}}
      class={{class}}
      {{on "input" onInput}}
    />
  `,
  context: {
    size: select('size', SIZES, SIZES[0], argument),
    state: select('state', STATES, STATES[0], argument),
    isInverse: boolean('isInverse', false, argument),
    iconFront: text('iconFront', '', argument),
    iconBack: text('iconBack', 'search', argument),
    iconFrontClass: text('iconFrontClass', '', argument),
    iconBackClass: text('iconBackClass', 'is-brand-300', argument),
    errorMsg: text('errMsg', '', argument),
    wrapperClass: text('wrapperClass', '', argument),
    value: text('value', '', attribute),
    placeholder: text('placeholder', 'Search', attribute),
    disabled: boolean('disabled', false, attribute),
    type: text('type', '', attribute),
    onInput: action('onInput'),
    class: text('class', '', attribute),
  },
});
