import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { argument, attribute, rootName } from './knob-categories';

export default {
  title: `${rootName}/DenaliInputGroup`,
  component: 'DenaliInputGroup',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliInputGroup @label="Input Label" class="m-b-30">
      <DenaliInput placeholder="Input" />
    </DenaliInputGroup>
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
      class="m-b-30"
    >
      <DenaliInput placeholder="Input" />
    </DenaliInputGroup>

    <DenaliInputGroup
      @label={{label}}
      @isStacked={{isStacked}}
      @isResponsive={{isResponsive}}
      @hasAutoWidth={{hasAutoWidth}}
      class="m-b-30"
    >
      <DenaliSwitch @onLabel="On" @offLabel="Off" />
    </DenaliInputGroup>
  `,
  context: {
    label: text('label', 'Label', argument),
    isStacked: boolean('isStacked', false, argument),
    isResponsive: boolean('isResponsive', false, argument),
    hasAutoWidth: boolean('hasAutoWidth', false, argument),
    class: text('class', '', attribute),
  },
});
