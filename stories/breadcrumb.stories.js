import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, array, text } from '@storybook/addon-knobs';
import { attribute, argument } from './knob-categories';

export default {
  title: 'DenaliBreadcrumb',
  component: 'DenaliBreadcrumb',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliBreadcrumb 
      @items={{items}}
      as |item|
    >
      <span class="link">{{item}}</span>
    </DenaliBreadcrumb>
  `,
  context: {
    items: ['North America', 'United States', 'Alaska', 'Denali'],
  },
});

export const Playground = () => ({
  template: hbs`
    <DenaliBreadcrumb 
      @items={{items}}
      class={{class}}
      as |item|
    >
      <span class="link">{{item}}</span>
    </DenaliBreadcrumb>
  `,
  context: {
    items: array('items', ['North America', 'United States', 'Alaska', 'Denali'], ',', argument),
    class: text('class', '', attribute),
  },
});
