import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, array, boolean, select, text } from '@storybook/addon-knobs';
import { argument, attribute, example } from './knob-categories';
import { STATES } from '../addon/components/denali-tags/tag-enums';

export default {
  title: 'DenaliTags',
  component: 'DenaliTags',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliTags as |Tags|>
      <Tags.Tag>Denali Tag</Tags.Tag>
    </DenaliTags>
  `,
  context: {},
});

const allStates = [undefined, ...STATES];

export const Playground = () => ({
  template: hbs`
    <DenaliTags as |Tags|>
      {{#each items as |item|}}
        <Tags.Tag 
          @state={{state}}
          @isSmall={{isSmall}}
          @isOutlined={{isOutlined}}
          @iconFront={{iconFront}}
          @iconBack={{iconBack}}
          class={{class}}
        >
          {{item}}
        </Tags.Tag>
      {{/each}}
    </DenaliTags>
  `,
  context: {
    state: select('state', allStates, allStates[0], argument),
    isSmall: boolean('isSmall', false, argument),
    isOutlined: boolean('isOutlined', false, argument),
    iconFront: text('iconFront', '', argument),
    iconBack: text('iconBack', 'close', argument),
    items: array('items', ['Ember', 'Denali', 'Tags'], ',', example),
    class: text('class', '', attribute),
  },
});
