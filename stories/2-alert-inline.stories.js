import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { TYPES } from '../addon/components/denali-alert-enums';
import { argument, attribute } from './knob-categories';

export default {
  title: 'DenaliAlertInline',
  component: 'DenaliAlertInline',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliAlertInline @title={{title}} @context={{context}}/>
  `,
  context: {
    title: 'Denali Inline Alert',
    context: 'Optional alert details',
  },
});

export const BlockForm = () => ({
  template: hbs`
    <DenaliAlertInline as |Alert|>
      <Alert.Title>{{title}}</Alert.Title>
      <Alert.Context>{{context}}</Alert.Context>
    </DenaliAlertInline>
  `,
  context: {
    title: 'Denali Inline Alert (Block Form)',
    context: 'Optional alert details',
  },
});

export const Playground = () => ({
  template: hbs`
    <DenaliAlertInline 
      @title={{title}}
      @context={{context}}
      @type={{type}}
      class={{class}}
    />
  `,
  context: {
    title: text('title', 'Denali Inline Alert', argument),
    context: text('context', 'Optional alert details', argument),
    type: select('type', TYPES, TYPES[0], argument),
    class: text('class', '', attribute),
  },
});
