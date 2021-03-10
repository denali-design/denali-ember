import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { argument, attribute, content } from './knob-categories';
import { COLORS, SHADES } from '../addon/components/color-enums';
import { SIZES } from '../addon/components/denali-chip-enums';

export default {
  title: 'DenaliChip',
  component: 'DenaliChip',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliChip>{{content}}</DenaliChip>
  `,
  context: {
    content: 'Denali Chip',
  },
});

export const Playground = () => ({
  template: hbs`
    <DenaliChip 
      @size={{size}}
      @backgroundColor={{backgroundColor}}
      @backgroundShade={{backgroundShade}}
      @textColor={{textColor}}
      @textShade={{textShade}}
      class={{class}}
    >
      {{content}}
    </DenaliChip>
  `,
  context: {
    size: select('size', SIZES, SIZES[0], argument),
    backgroundColor: select('backgroundColor', COLORS, COLORS[0], argument),
    backgroundShade: select('backgroundShade', SHADES, '500', argument),
    textColor: select('textColor', COLORS, COLORS[0], argument),
    textShade: select('textShade', SHADES, '500', argument),
    class: text('class', '', attribute),
    content: text('content', 'Denali Chip', content),
  },
});
