import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import { withKnobs, array, boolean, text } from '@storybook/addon-knobs';
import { argument, attribute, example } from './knob-categories';

export default {
  title: 'DenaliToggle',
  component: 'DenaliToggle',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliToggle
      @onChange={{queue onChange (fn (mut selectedItem))}}
      @activeOption={{selectedItem}}
      @options={{items}}
      as |item|
    >
      {{item}}
    </DenaliToggle>
  `,
  context: {
    items: ['Denali', 'Toggle'],
    selectedItem: 'Denali',
    onChange: action('onChange'),
  },
});

export const Playground = () => ({
  template: hbs`
    <DenaliToggle
      @onChange={{queue onChange (fn (mut selectedItem))}}
      @activeOption={{selectedItem}}
      @options={{items}}
      @disabledOptions={{disabledItems}}
      @isInverse={{isInverse}}
      @isSmall={{isSmall}}
      class={{class}}
      as |item|
    >
      {{item}}
    </DenaliToggle>
  `,
  context: {
    isInverse: boolean('isInverse', false, argument),
    isSmall: boolean('isSmall', false, argument),
    items: array('items', ['Ember', 'Denali', 'Toggle'], ',', example),
    selectedItem: text('selectedItem', 'Denali', example),
    disabledItems: array('disabledItems', ['Toggle'], ',', example),
    onChange: action('onChange'),
    class: text('class', '', attribute),
  },
});
