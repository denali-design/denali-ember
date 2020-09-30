import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { argument, attribute } from './knob-categories';
import { SIZES } from '../addon/components/denali-loader-enums';

export default {
  title: 'DenaliLoader',
  component: 'DenaliLoader',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliLoader />
  `,
});

export const Playground = () => ({
  template: hbs`
    <DenaliLoader
      @isInverse={{isInverse}}
      @size={{size}}
      class={{class}}
    />
  `,
  context: {
    size: select('size', SIZES, SIZES[0], argument),
    isInverse: boolean('isInverse', false, argument),
    class: text('class', '', attribute),
  },
});
