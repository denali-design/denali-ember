import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import { withKnobs, array, boolean, select, text } from '@storybook/addon-knobs';
import { argument, attribute, example } from './knob-categories';
import { SIZES } from '../addon/components/denali-select-enums';

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

const allSizes = [undefined, ...SIZES];

export const Playground = () => ({
  template: hbs`
    <DenaliSelect
      @options={{items}}
      @selectedOption={{selectedItem}}
      @disabledOptions={{disabledItems}}
      @size={{size}}
      @wrapperClass={{wrapperClass}}
      @isInverse={{isInverse}}
      @onChange={{queue onChange (fn (mut selectedItem))}}
      class={{class}}
      as |item|>
      {{item}}
    </DenaliSelect>
  `,
  context: {
    size: select('size', allSizes, allSizes[0], argument),
    isInverse: boolean('isInverse', false, argument),
    class: text('class', '', attribute),
    wrapperClass: text('wrapperClass', '', argument),
    items: array('items', ['Ember', 'Denali', 'Select'], ',', example),
    selectedItem: text('selectedItem', 'Denali', example),
    disabledItems: array('disabledItems', ['Select'], ',', example),
    onChange: action('onChange'),
  },
});
