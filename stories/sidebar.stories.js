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
      {{#each items as |item|}}
        <Sidebar.Tab 
          @isActive={{contains item activeItems}}
          @isDisabled={{contains item disabledItems}}
        >
          {{item}}
        </Sidebar.Tab>
      {{/each}}
    </DenaliSidebar>
  `,
  context: {
    items: array('items', ['Ember', 'Denali', 'Sidebar'], ',', example),
    activeItems: array('activeItems', ['Denali'], ',', example),
    disabledItems: array('disabledItems', ['Ember'], ',', example),
    class: text('class', '', attribute),
  },
});
