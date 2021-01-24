import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import { withKnobs, array, boolean, select, text } from '@storybook/addon-knobs';
import { example } from '../knob-categories';

export default {
  title: 'Ember Power Select/PowerSelect',
  component: 'PowerSelectMultiple',
  decorators: [withKnobs],
};

const selected = { name: 'Denali' };
export const Default = () => ({
  template: hbs`
    <PowerSelect
      @searchEnabled={{true}}
      @searchField="name"
      @options={{items}}
      @selected={{selectedItem}}
      @searchPlaceholder="Search"
      @placeholder="Select An Item..."
      @onChange={{queue onChange (fn (mut selectedItem))}}
      @renderInPlace={{true}}
      as |item|
    >
      {{item.name}}
    </PowerSelect>
  `,
  context: {
    items: [selected, { name: 'Styled', disabled: true }, { name: 'Power' }, { name: 'Select' }, { name: 'Multiple' }],
    selectedItems: selected,
    onChange: action('onChange'),
  },
});

export const Groups = () => ({
  template: hbs`
    <PowerSelect
      @searchEnabled={{searchEnabled}}
      @options={{items}}
      @selected={{selectedItem}}
      @searchPlaceholder="Search"
      @placeholder="Select An Item..."
      @onChange={{queue onChange (fn (mut selectedItem))}}
      @renderInPlace={{true}}
      as |item|
    >
      {{item}}
    </PowerSelect>
  `,
  context: {
    items: [
      { groupName: 'Denali', options: ['Themable', 'Design', 'System'] },
      { groupName: 'Ember', options: ['Ambitious', 'Web', 'Framework'] },
    ],
    onChange: action('onChange'),
    searchEnabled: boolean('searchEnabled', true, example),
  },
});

export const Playground = () => ({
  template: hbs`
    <PowerSelect
      @options={{items}}
      @selected={{selectedItem}}
      @searchEnabled={{searchEnabled}}
      @searchPlaceholder="Search"
      @placeholder="Select An Item..."
      @disabled={{disabled}}
      @onChange={{queue onChange (fn (mut selectedItem))}}
      @renderInPlace={{true}}
      @triggerClass={{sizeClass}}
      as |name|
    >
      {{name}}
    </PowerSelect>
  `,
  context: {
    items: array('items', ['Denali', 'Styled', 'Power', 'Select', 'Multiple'], ',', example),
    selectedItem: text('selectedItem', 'Denali', example),
    searchEnabled: boolean('searchEnabled', true, example),
    disabled: boolean('disabled', false, example),
    sizeClass: select('sizeClass', [undefined, 'is-small', 'is-medium', 'is-large'], undefined, example),
    onChange: action('onChange'),
  },
});
