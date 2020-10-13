import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { argument, attribute, content } from './knob-categories';
import { ALIGNMENTS } from '../addon/components/denali-menu-enums';

export default {
  title: 'DenaliMenu',
  component: 'DenaliMenu',
  decorators: [withKnobs],
};

export const Default = () => ({
  template: hbs`
  <DenaliMenu as |Menu|>
    <Menu.Trigger>{{triggerContent}}</Menu.Trigger>
    <Menu.Content>
      <span class="link">{{mainContent}}</span>
      <hr>
      <span class="link">{{footerContent}}</span>
    </Menu.Content>
  </DenaliMenu>
  `,
  context: {
    triggerContent: 'Hover to trigger Denali Menu',
    mainContent: 'Main Content',
    footerContent: 'Menu Footer',
  },
});

const alignments = Object.assign(
  {
    'undefined (Center)': null,
  },
  ...ALIGNMENTS.map((a) => ({ [`${a[0].toUpperCase()}${a.substring(1)}`]: a }))
);

export const Playground = () => ({
  template: hbs`
  <DenaliMenu class={{class}} @alignContent={{alignment}} as |Menu|>
    <Menu.Trigger>{{triggerContent}}</Menu.Trigger>
    <Menu.Content>
      <p class="is-bold">{{mainContent}}</p>
      <hr>
      <span>{{footerContent}}</span>
    </Menu.Content>
  </DenaliMenu>
  `,
  context: {
    alignment: select('alignment', alignments, undefined, argument),
    class: text('class', '', attribute),
    triggerContent: text('triggerContent', 'Menu Trigger', content),
    mainContent: text('mainContent', 'Cool menu info', content),
    footerContent: text('footerContent', 'Additional footer info', content),
  },
});
