import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { argument, attribute } from './knob-categories';

export default {
  title: 'DenaliInputGroup',
  component: 'DenaliInputGroup',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliInputGroup @label="Input Label">
      <DenaliInput placeholder="Input" />
    </DenaliInputGroup>
    <br>
    <DenaliInputGroup @label="Switch Label">
      <DenaliSwitch @onLabel="On" @offLabel="Off" />
    </DenaliInputGroup>
  `,
  context: {},
});

export const Playground = () => ({
  template: hbs`
    <DenaliInputGroup 
      @label={{label}}
      @isStacked={{isStacked}}
      @isResponsive={{isResponsive}}
      @hasAutoWidth={{hasAutoWidth}}
    >
      <DenaliInput placeholder="Input" />
    </DenaliInputGroup>
    <br>
    <DenaliInputGroup 
      @label={{label}}
      @isStacked={{isStacked}}
      @isResponsive={{isResponsive}}
      @hasAutoWidth={{hasAutoWidth}}
    >
      <DenaliSwitch @onLabel="On" @offLabel="Off" />
    </DenaliInputGroup>
    <br>
    <DenaliInputGroup 
      @label={{label}}
      @isStacked={{isStacked}}
      @isResponsive={{isResponsive}}
      @hasAutoWidth={{hasAutoWidth}}
    >
  `,
  context: {
    label: text('label', 'Label', argument),
    isStacked: boolean('isStacked', false, argument),
    isResponsive: boolean('isResponsive', false, argument),
    hasAutoWidth: boolean('hasAutoWidth', false, argument),
    class: text('class', '', attribute),
  },
});
