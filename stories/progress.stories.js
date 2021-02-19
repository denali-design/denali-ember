import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import { withKnobs, array, text, boolean, select, number } from '@storybook/addon-knobs';
import { STYLES, SIZES, TYPES } from '../addon/components/denali-button-enums';
import { attribute, argument, content } from './knob-categories';

export default {
  title: 'DenaliProgress',
  component: 'DenaliProgress',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliProgress @percent={{percent}}/>
  `,
  context: {
    percent: array('percent', [50]),
  },
});

export const Playground = () => ({
  template: hbs`
    <DenaliProgress
    @percent={{percent}}
    @size={{size}}
    @isLoading={{isLoading}}
    @colors={{colors}}
    />
  `,
  context: {
    percent: array('percent', [50]),
    size: select('size', SIZES, SIZES[0], argument),
    isLoading: boolean('isLoading', false, argument),
    colors: array('colors', []),
  },
});
