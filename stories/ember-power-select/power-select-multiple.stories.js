import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import { withKnobs, array, boolean, select } from '@storybook/addon-knobs';
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

export const Groups = () => ({
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
      {{item}}
    </PowerSelectMultiple>
  `,
  context: {
    items: [
      { groupName: 'Denali', options: ['Themable', 'Design', 'System'] },
      { groupName: 'Ember', options: ['Ambitious', 'Web', 'Framework'] },
    ],
    onChange: action('onChange'),
  },
});

export const Playground = () => ({
  template: hbs`
    <PowerSelectMultiple
      @options={{items}}
      @selected={{selectedItems}}
      @searchEnabled={{true}}
      @placeholder="Select Some Items..."
      @disabled={{disabled}}
      @onChange={{queue onChange (fn (mut selectedItems))}}
      @renderInPlace={{true}}
      @triggerClass={{sizeClass}}
      as |name|
    >
      {{name}}
    </PowerSelectMultiple>
  `,
  context: {
    items: array('items', ['Denali', 'Styled', 'Power', 'Select', 'Multiple'], ',', example),
    selectedItems: array('selectedItems', ['Denali'], ',', example),
    disabled: boolean('disabled', false, example),
    sizeClass: select('sizeClass', [undefined, 'is-small', 'is-medium', 'is-large'], undefined, example),
    onChange: action('onChange'),
  },
});
