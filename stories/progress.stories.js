import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { SIZES, SHADES, COLORS } from '../addon/components/denali-progress-enums';
import { argument } from './knob-categories';

export default {
  title: 'DenaliProgress',
  component: 'DenaliProgress',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliProgress @value={{"50"}}/>
  `,
});

export const BlockFormPlayground = () => ({
  template: hbs`
    <DenaliProgress
      @size={{size}}
      @isLoading={{isLoading}}
      as |Progress|
    >
      <Progress.Bar @color={{color1}} @value={{value1}} @shade={{shade1}} />
      <Progress.Bar @color={{color2}} @value={{value2}} @shade={{shade2}} />
      <Progress.Bar @color={{color3}} @value={{value3}} @shade={{shade3}} />
    </DenaliProgress>
  `,
  context: {
    value1: text('value1', '10', argument),
    value2: text('value2', '20', argument),
    value3: text('value3', '30', argument),
    color1: select('color1', COLORS, COLORS[0], argument),
    color2: select('color2', COLORS, COLORS[3], argument),
    color3: select('color3', COLORS, COLORS[5], argument),
    shade1: select('shade1', SHADES, '100', argument),
    shade2: select('shade2', SHADES, '200', argument),
    shade3: select('shade3', SHADES, '300', argument),
    size: select('size', SIZES, SIZES[0], argument),
    isLoading: boolean('isLoading', false, argument),
  },
});

export const Playground = () => ({
  template: hbs`
    <DenaliProgress
      @size={{size}}
      @isLoading={{isLoading}}
      @color={{color}}
      @shade={{shade}}
      @value={{value}}
    />
  `,
  context: {
    value: text('value', '33', argument),
    color: select('color', COLORS, COLORS[0], argument),
    shade: select('shade', SHADES, '500', argument),
    size: select('size', SIZES, SIZES[0], argument),
    isLoading: boolean('isLoading', false, argument),
  },
});
