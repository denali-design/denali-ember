import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, array, boolean, select } from '@storybook/addon-knobs';
import { SIZES } from '../addon/components/denali-button-enums';
import { argument } from './knob-categories';

export default {
  title: 'DenaliProgress',
  component: 'DenaliProgress',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliProgress @percents={{percents}}/>
  `,
  context: {
    percents: array('percents', [50]),
  },
});

export const Playground = () => ({
  template: hbs`
    <DenaliProgress
    @percents={{percents}}
    @size={{size}}
    @isLoading={{isLoading}}
    @colors={{colors}}
    />
  `,
  context: {
    percents: array('percents', [50], ',', argument),
    colors: array('colors', ['purple'], ',', argument),
    size: select('size', SIZES, SIZES[0], argument),
    isLoading: boolean('isLoading', false, argument),
  },
});
