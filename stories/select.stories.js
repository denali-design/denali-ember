import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import { withKnobs, array, boolean, text } from '@storybook/addon-knobs';
import { argument, attribute, example } from './knob-categories';

export default {
  title: 'DenaliSelect',
  component: 'DenaliSelect',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliSelect
      @options={{items}}
      @selectedOption={{selectedItem}}
      @onChange={{queue onChange (fn (mut selectedItem))}}
      as |item|>
      {{item}}
    </DenaliSelect>
  `,
  context: {
    items: ['Denali', 'Select'],
    selectedItem: 'Denali',
    onChange: action('onChange'),
  },
});

export const Playground = () => ({
  template: hbs`
    <DenaliSelect
      @options={{items}}
      @selectedOption={{selectedItem}}
      @disabledOptions={{disabledItems}}
      @isSmall={{isSmall}}
      @isInverse={{isInverse}}
      @onChange={{queue onChange (fn (mut selectedItem))}}
      class={{class}}
      as |item|>
      {{item}}
    </DenaliSelect>
  `,
  context: {
    isSmall: boolean('isSmall', false, argument),
    isInverse: boolean('isInverse', false, argument),
    class: text('class', '', attribute),
    items: array('items', ['Ember', 'Denali', 'Select'], ',', example),
    selectedItem: text('selectedItem', 'Denali', example),
    disabledItems: array('disabledItems', ['Select'], ',', example),
    onChange: action('onChange'),
  },
});
