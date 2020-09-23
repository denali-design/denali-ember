import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { TYPES } from '../addon/components/denali-alert-enums';

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
    title: text('title', 'This is a default inline alert'),
    context: text('context', 'Optional alert details'),
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
    title: text('title', 'This is a default block-form inline alert'),
    context: text('context', 'Optional alert details'),
  },
});

export const Playground = () => ({
  template: hbs`
    <DenaliAlertInline 
      @title={{title}}
      @context={{context}}
      @type={{type}}
    />
  `,
  context: {
    title: text('title', 'This is an inline alert'),
    context: text('context', 'Optional alert details'),
    type: select('type', TYPES),
  },
});
