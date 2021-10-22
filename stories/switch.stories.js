import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { argument, attribute, rootName } from './knob-categories';

export default {
  title: `${rootName}/DenaliSwitch`,
  component: 'DenaliSwitch',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliSwitch
      @onLabel="Denali Switch On"
      @offLabel="Denali Switch Off"
      @onChange={{onChange}}
    />
  `,
  context: {
    onChange: action('onChange'),
  },
});

export const Playground = () => ({
  template: hbs`
    <DenaliSwitch
      @onLabel={{onLabel}}
      @offLabel={{offLabel}}
      @onChange={{onChange}}
      checked={{checked}}
      disabled={{disabled}}
      class={{class}}
    />
  `,
  context: {
    onLabel: text('onLabel', 'On', argument),
    offLabel: text('offLabel', 'Off', argument),
    checked: boolean('checked', true, attribute),
    disabled: boolean('disabled', false, attribute),
    class: text('class', '', attribute),
    onChange: action('onChange'),
  },
});
