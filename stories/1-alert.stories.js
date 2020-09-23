import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { TYPES } from '../addon/components/denali-alert-enums';

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
    title: text('title', 'This is a default alert'),
    context: text('context', 'Optional alert details'),
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
    title: text('title', 'This is a default block-form alert'),
    context: text('context', 'Optional alert details'),
  },
});

export const Playground = () => ({
  template: hbs`
    <DenaliAlert 
      @title={{title}}
      @context={{context}}
      @type={{type}}
      @icon={{icon}}
      @isBlock={{isBlock}}
      @onClose={{onClose}}
    />
  `,
  context: {
    title: text('title', 'This is an alert'),
    context: text('context', 'Optional alert details'),
    type: select('type', TYPES),
    isBlock: boolean('isBlock'),
    onClose: action('onClose'),
  },
});
