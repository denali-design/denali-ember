import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { TYPES } from '../addon/components/denali-alert-enums';
import { argument, attribute } from './knob-categories';

export default {
  title: 'DenaliAlert',
  component: 'DenaliAlert',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliAlert @title={{title}} @context={{context}}/>
  `,
  context: {
    title: 'Denali Alert',
    context: 'Optional alert details',
  },
});

export const BlockForm = () => ({
  template: hbs`
    <DenaliAlert as |Alert|>
      <Alert.Title>{{title}}</Alert.Title>
      <Alert.Context>{{context}}</Alert.Context>
    </DenaliAlert>
  `,
  context: {
    title: 'Denali Alert (Block Form)',
    context: 'Optional alert details',
  },
});

export const Playground = () => ({
  template: hbs`
    <DenaliAlert 
      @title={{title}}
      @context={{context}}
      @type={{type}}
      @isBlock={{isBlock}}
      @onClose={{onClose}}
      class={{class}}
    />
  `,
  context: {
    title: text('title', 'Denali Alert', argument),
    context: text('context', 'Optional alert details', argument),
    type: select('type', TYPES, TYPES[0], argument),
    isBlock: boolean('isBlock', false, argument),
    onClose: action('onClose', argument),
    class: text('class', '', attribute),
  },
});
