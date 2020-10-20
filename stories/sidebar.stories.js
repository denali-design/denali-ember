import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, array, text } from '@storybook/addon-knobs';
import { attribute, example } from './knob-categories';

export default {
  title: 'DenaliSidebar',
  component: 'DenaliSidebar',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
    <DenaliSidebar as |Sidebar|>
      <Sidebar.LinkToTab @route=".">{{linkToTab}}</Sidebar.LinkToTab>
      <Sidebar.Tab>{{tabOne}}</Sidebar.Tab>
      <Sidebar.Tab @isActive={{true}}>{{tabTwo}}</Sidebar.Tab>
      <Sidebar.Tab @isDisabled={{true}}>{{tabThree}}</Sidebar.Tab>
    </DenaliSidebar>
  `,
  context: {
    linkToTab: 'LinkTo Sidebar Tab',
    tabOne: 'Normal Sidebar Tab',
    tabTwo: 'Active Sidebar Tab',
    tabThree: 'Disabled Sidebar Tab',
  },
});

export const Playground = () => ({
  template: hbs`
    <DenaliSidebar class={{class}} as |Sidebar|>
      {{#each tabs as |tab|}}
        <Sidebar.Tab 
          @isActive={{eq activeTab tab}}
          @isDisabled={{contains tab disabledTabs}}
        >
          {{tab}}
        </Sidebar.Tab>
      {{/each}}
    </DenaliSidebar>
  `,
  context: {
    tabs: array('tabs', ['Ember', 'Denali', 'Sidebar'], ',', example),
    activeTab: text('activeTab', 'Denali', example),
    disabledTabs: array('disabledTabs', ['Ember'], ',', example),
    class: text('class', '', attribute),
  },
});
