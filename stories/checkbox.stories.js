import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { attribute, content } from './knob-categories';

export default {
  title: 'DenaliCheckbox',
  component: 'DenaliCheckbox',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliCheckbox>{{content}}</DenaliCheckbox>
  `,
  context: {
    content: 'Denali Checkbox',
  },
});

export const Playground = () => ({
  template: hbs`
    <DenaliCheckbox 
      checked={{checked}}
      disabled={{disabled}}
      data-partial={{dataPartial}}
      class={{class}}
    >
      {{content}}
    </DenaliCheckbox>
  `,
  context: {
    checked: boolean('checked', false, attribute),
    disabled: boolean('disabled', false, attribute),
    dataPartial: boolean('data-partial', false, attribute),
    content: text('content', 'Denali Checkbox', content),
    class: text('class', '', attribute),
  },
});
