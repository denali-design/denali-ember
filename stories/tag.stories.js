import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import { withKnobs, array, boolean, select, text } from '@storybook/addon-knobs';
import { argument, attribute, example, rootName } from './knob-categories';
import { STATES } from '../addon/components/denali-tag-enums';

export default {
  title: `${rootName}/DenaliTag`,
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
        @iconFrontClass={{iconFrontClass}}
        @onIconFrontClick={{onIconFrontClick}}
        @iconBack={{iconBack}}
        @iconBackClass={{iconBackClass}}
        @onIconBackClick={{onIconBackClick}}
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
    iconFrontClass: text('iconFrontClass', '', argument),
    onIconFrontClick: action('onIconFrontClick'),
    iconBack: text('iconBack', 'close', argument),
    iconBackClass: text('iconBackClass', '', argument),
    onIconBackClick: action('onIconBackClick'),
    items: array('items', ['Ember', 'Denali', 'Tags'], ',', example),
    class: text('class', '', attribute),
  },
});
