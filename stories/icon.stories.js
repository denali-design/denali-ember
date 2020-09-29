import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { argument, attribute } from './knob-categories';
import { SIZES } from '../addon/components/denali-icon-enums';

export default {
  title: 'DenaliIcon',
  component: 'DenaliIcon',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliIcon @icon="denali"/>
  `,
});

export const Playground = () => ({
  template: hbs`
    <DenaliIcon 
      @icon={{icon}}
      @size={{size}}
      @class={{class}}
    />
  `,
  context: {
    icon: text('icon', 'ember', argument),
    size: select('size', SIZES, SIZES[0], argument),
    class: text('class', '', attribute),
  },
});
