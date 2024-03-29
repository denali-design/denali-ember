import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { STYLES } from '../addon/components/denali-alert-enums';
import { rootName, argument, attribute } from './knob-categories';

export default {
  title: `${rootName}/DenaliAlert`,
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
      @style={{style}}
      @icon={{icon}}
      @isBlock={{isBlock}}
      @onClose={{onClose}}
      class={{class}}
    />
  `,
  context: {
    title: text('title', 'Denali Alert', argument),
    context: text('context', 'Optional alert details', argument),
    style: select('style', STYLES, STYLES[0], argument),
    icon: text('icon', 'stop-urgent', argument),
    isBlock: boolean('isBlock', false, argument),
    onClose: action('onClose'),
    class: text('class', '', attribute),
  },
});
