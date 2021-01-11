import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, array, boolean, select, text } from '@storybook/addon-knobs';
import { argument, attribute, example } from './knob-categories';
import { STATES } from '../addon/components/denali-tag-enums';

export default {
  title: 'DenaliTag',
  component: 'DenaliTag',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliTag>Denali Tag</DenaliTag>
  `,
  context: {},
});

const allStates = [undefined, ...STATES];

export const Playground = () => ({
  template: hbs`
    {{#each items as |item|}}
      <DenaliTag
        @state={{state}}
        @isSmall={{isSmall}}
        @isOutlined={{isOutlined}}
        @iconFront={{iconFront}}
        @iconBack={{iconBack}}
        class={{class}}
      >
        {{item}}
      </DenaliTag>
    {{/each}}
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
