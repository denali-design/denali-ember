import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import { withKnobs, array, boolean, text } from '@storybook/addon-knobs';
import { argument, attribute, example } from './knob-categories';

export default {
  title: 'DenaliRadioToggle',
  component: 'DenaliRadioToggle',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliRadioToggle
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
    </DenaliRadioToggle>
  `,
  context: {
    items: ['Denali', 'Radio'],
    selectedItem: 'Denali',
    onChange: action('onChange'),
  },
});

export const Playground = () => ({
  template: hbs`
    <DenaliRadioToggle
      @onChanged={{queue onChange (fn (mut selectedItem))}}
      @isInverse={{isInverse}}
      @isSmall={{isSmall}}
      class={{class}}
      as |Radio|
    >
      {{#each items as |item|}}
        <Radio.Option
          @value={{item}}
          @checked={{eq item selectedItem}}
          @disabled={{eq item disabledItem}}
        >
          {{item}}
        </Radio.Option>
      {{/each}}
    </DenaliRadioToggle>
  `,
  context: {
    isInverse: boolean('isInverse', false, argument),
    isSmall: boolean('isSmall', false, argument),
    items: array('items', ['Ember', 'Denali', 'Radio'], ',', example),
    selectedItem: text('selectedItem', 'Denali', example),
    disabledItem: text('disabledItem', 'Radio', example),
    onChange: action('onChange'),
    class: text('class', '', attribute),
  },
});
