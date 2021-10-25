import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, array, select, text } from '@storybook/addon-knobs';
import { argument, attribute, example, rootName } from './knob-categories';
import { STYLES } from '../addon/components/denali-tabs-enums';

export default {
  title: `${rootName}/DenaliTabs`,
  component: 'DenaliTabs',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliTabs as |Tabs|>
      <Tabs.LinkToTab @route=".">{{linkToTab}}</Tabs.LinkToTab>
      <Tabs.Tab>{{tabOne}}</Tabs.Tab>
      <Tabs.Tab @isActive={{true}}>{{tabTwo}}</Tabs.Tab>
      <Tabs.Tab @isDisabled={{true}}>{{tabThree}}</Tabs.Tab>
    </DenaliTabs>
  `,
  context: {
    linkToTab: 'linkToTab',
    tabOne: 'Denali',
    tabTwo: 'Active Tab',
    tabThree: 'Disabled Tab',
  },
});

export const Playground = () => ({
  template: hbs`
    <DenaliTabs class={{class}} @style={{style}} as |Tabs|>
      {{#each items as |item|}}
        <Tabs.Tab
          @isActive={{includes item activeItems}}
          @isDisabled={{includes item disabledItems}}
        >
          {{item}}
        </Tabs.Tab>
      {{/each}}
    </DenaliTabs>
  `,
  context: {
    style: select('style', STYLES, STYLES[0], argument),
    items: array('items', ['Ember', 'Denali', 'Tabs'], ',', example),
    activeItems: array('activeItems', ['Denali'], ',', example),
    disabledItems: array('disabledItems', ['Ember'], ',', example),
    class: text('class', '', attribute),
  },
});
