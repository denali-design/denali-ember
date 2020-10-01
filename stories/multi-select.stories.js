import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import { withKnobs, array, boolean, text } from '@storybook/addon-knobs';
import { argument, attribute, example } from './knob-categories';
import { A as arr } from '@ember/array';

export default {
  title: 'DenaliMultiSelect',
  component: 'DenaliMultiSelect',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliMultiSelect
      @options={{items}}
      @selectedOptions={{selectedItems}}
      @onChange={{queue onChange (fn (mut selectedItems))}}
      as |item|
    >
      {{item}}
    </DenaliMultiSelect>
  `,
  context: {
    items: ['Denali', 'Select'],
    selectedItems: ['Denali'],
    onChange: action('onChange'),
  },
});

export const Playground = () => ({
  template: hbs`
    <DenaliMultiSelect
      @options={{items}}
      @selectedOptions={{selectedItems}}
      @disabledOptions={{disabledItems}}
      @isSmall={{isSmall}}
      @isInverse={{isInverse}}
      @onChange={{queue onChange (fn (mut selectedItems))}}
      @isSearchEnabled={{isSearchEnabled}}
      @searchFunc={{searchFunc}}
      class={{class}}
      as |item|
    >
      {{item}}
    </DenaliMultiSelect>
  `,
  context: {
    isSmall: boolean('isSmall', false, argument),
    isInverse: boolean('isInverse', false, argument),
    class: text('class', '', attribute),
    items: array('items', ['Ember', 'Denali', 'Select'], ',', example),
    selectedItems: array('selectedItems', ['Denali'], ',', example),
    disabledItems: array('disabledItems', ['Select'], ',', example),
    onChange: action('onChange'),
    isSearchEnabled: boolean('isSearchEnabled', false, argument),
    searchFunc: (value, target) => value.toLowerCase().includes(target.toLowerCase()),
  },
});
