import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { argument, attribute, example } from './knob-categories';
import { action } from '@storybook/addon-actions';
import { STATES } from '../addon/components/denali-text-area-enums';

export default {
  title: 'DenaliTextArea',
  component: 'DenaliTextArea',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliTextArea>Denali Text Area</DenaliTextArea>
  `,
});

const allStates = [undefined, ...STATES];
export const Playground = () => ({
  template: hbs`
    <DenaliTextArea
      @state={{state}}
      @errorMsg={{errorMsg}}
      @wrapperClass={{wrapperClass}}
      placeholder={{placeholder}}
      disabled={{disabled}}
      class={{class}}
      {{on "input" (queue onInput (fn (mut text)))}}
    >{{text}}</DenaliTextArea>
  `,
  context: {
    state: select('state', allStates, allStates[0], argument),
    errorMsg: text('errorMsg', '', argument),
    wrapperClass: text('wrapperClass', '', argument),
    placeholder: text('placeholder', 'Denali Text Area', attribute),
    disabled: boolean('disabled', false, attribute),
    class: text('class', '', attribute),
    text: text('text', '', example),
    onInput: action('onInput'),
  },
});
