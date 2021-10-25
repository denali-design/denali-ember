import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { argument, attribute, content, rootName } from './knob-categories';
import { ALIGNMENTS } from '../addon/components/denali-menu-enums';

export default {
  title: `${rootName}/DenaliMenu`,
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

const allAlignments = [undefined, ...ALIGNMENTS];

export const Playground = () => ({
  template: hbs`
  <DenaliMenu class={{class}} @alignContent={{alignContent}} as |Menu|>
    <Menu.Trigger>{{triggerContent}}</Menu.Trigger>
    <Menu.Content>
      <p class="is-bold">{{mainContent}}</p>
      <hr>
      <span>{{footerContent}}</span>
    </Menu.Content>
  </DenaliMenu>
  `,
  context: {
    alignContent: select('alignContent', allAlignments, allAlignments[0], argument),
    triggerContent: text('triggerContent', 'Menu Trigger', content),
    mainContent: text('mainContent', 'Cool menu info', content),
    footerContent: text('footerContent', 'Additional footer info', content),
    class: text('class', '', attribute),
  },
});
