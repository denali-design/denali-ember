import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { STYLES } from '../addon/components/denali-alert-enums';
import { rootName, argument, attribute } from './knob-categories';

export default {
  title: `${rootName}/DenaliAlertInline`,
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
      @style={{style}}
      class={{class}}
    />
  `,
  context: {
    title: text('title', 'Denali Inline Alert', argument),
    context: text('context', 'Optional alert details', argument),
    style: select('style', STYLES, STYLES[0], argument),
    class: text('class', '', attribute),
  },
});
