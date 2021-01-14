import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import { withKnobs, array, select } from '@storybook/addon-knobs';
import { example } from '../knob-categories';

export default {
  title: 'Ember Power Select/PowerSelectMultiple',
  component: 'PowerSelectMultiple',
  decorators: [withKnobs],
};

const selected = { name: 'Denali' };
export const Default = () => ({
  template: hbs`
    <PowerSelectMultiple
      @searchEnabled={{true}}
      @searchField="name"
      @options={{items}}
      @selected={{selectedItems}}
      @placeholder="Select Some Items..."
      @onChange={{queue onChange (fn (mut selectedItems))}}
      @renderInPlace={{true}}
      as |item|
    >
      {{item.name}}
    </PowerSelectMultiple>
  `,
  context: {
    items: [selected, { name: 'Styled', disabled: true }, { name: 'Power' }, { name: 'Select' }, { name: 'Multiple' }],
    selectedItems: [selected],
    onChange: action('onChange'),
  },
});

export const Playground = () => ({
  template: hbs`
    <PowerSelectMultiple
      @searchEnabled={{true}}
      @options={{items}}
      @selected={{selectedItems}}
      @placeholder="Select Some Items..."
      @onChange={{queue onChange (fn (mut selectedItems))}}
      @renderInPlace={{true}}
      class={{sizeClass}}
      as |name|
    >
      {{name}}
    </PowerSelectMultiple>
  `,
  context: {
    items: array('items', ['Denali', 'Styled', 'Power', 'Select', 'Multiple'], ',', example),
    selectedItems: array('selectedItems', ['Denali'], ',', example),
    sizeClass: select('sizeClass', [undefined, 'is-small', 'is-medium', 'is-large'], undefined, example),
    onChange: action('onChange'),
  },
});
