import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, array } from '@storybook/addon-knobs';
import { attribute, example } from './knob-categories';

export default {
  title: 'DenaliRadio',
  component: 'DenaliRadio',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliRadio
      @onChanged={{queue onChange (fn (mut selectedItem))}}
      as |Radio|
    >
      {{#each items as |item|}}
        <Radio.Option
          @value={{item}}
          @checked={{eq item selectedItem}}
        >
          {{item}}
        </Radio.Option>
      {{/each}}
    </DenaliRadio>
  `,
  context: {
    items: ['Denali', 'Radio'],
    selectedItem: 'Denali',
    onChange: action('onChange'),
  },
});

export const Playground = () => ({
  template: hbs`
    <DenaliRadio
      @onChanged={{queue onChange (fn (mut selectedItem))}}
      as |Radio|
    >
      {{#each items as |item|}}
        <Radio.Option
          @value={{item}}
          @checked={{eq item selectedItem}}
          @disabled={{eq item disabledItem}}
          class={{class}}
        >
          {{item}}
        </Radio.Option>
      {{/each}}
    </DenaliRadio>
  `,
  context: {
    class: text('class', '', attribute),
    items: array('items', ['Ember', 'Denali', 'Radio'], ',', example),
    selectedItem: text('selectedItem', 'Denali', example),
    disabledItem: text('disabledItem', 'Radio', example),
    onChange: action('onChange'),
  },
});
